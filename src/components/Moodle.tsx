import { useEffect, useMemo, useState } from 'react'
import { marked } from 'marked'

type FileType = 'md' | 'txt' | 'json' | 'pdf'

interface MoodleFile {
  path: string
  folder: string
  name: string
  type: FileType
  load?: () => Promise<string>
  url?: string
}

// Inhalte aus den Kursordnern einsammeln. Text-Dateien werden faul (on-demand) geladen,
// damit der Bundle klein bleibt; PDFs werden als URL referenziert.
// (import.meta.glob verlangt statische String-Literale, keine Template-Strings.)
const mdLoaders = import.meta.glob('../../{altklausuren,folien-vom-Lehrer,leons-unterlagen,unofficial-stuff}/**/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>
const txtLoaders = import.meta.glob('../../{altklausuren,folien-vom-Lehrer,leons-unterlagen,unofficial-stuff}/**/*.txt', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>
const jsonLoaders = import.meta.glob('../../{altklausuren,folien-vom-Lehrer,leons-unterlagen,unofficial-stuff}/**/*.json', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>
const urlPdf = import.meta.glob('../../{altklausuren,folien-vom-Lehrer,leons-unterlagen,unofficial-stuff}/**/*.pdf', { query: '?url', import: 'default', eager: true }) as Record<string, string>

const toPath = (key: string) => key.replace(/^\.\.\/\.\.\//, '')

function makeFiles(): MoodleFile[] {
  const files: MoodleFile[] = []
  const meta = (path: string) => {
    const segs = path.split('/')
    return { name: segs[segs.length - 1], folder: segs.length > 1 ? segs.slice(0, -1).join('/') : '(Hauptordner)' }
  }
  const addText = (records: Record<string, () => Promise<string>>, type: FileType) => {
    for (const [key, load] of Object.entries(records)) {
      const path = toPath(key)
      files.push({ path, ...meta(path), type, load })
    }
  }
  addText(mdLoaders, 'md')
  addText(txtLoaders, 'txt')
  addText(jsonLoaders, 'json')
  for (const [key, url] of Object.entries(urlPdf)) {
    const path = toPath(key)
    files.push({ path, ...meta(path), type: 'pdf', url })
  }
  return files.sort((a, b) => a.path.localeCompare(b.path, 'de'))
}

const allFiles = makeFiles()
const typeLabel: Record<FileType, string> = { md: 'MD', txt: 'TXT', json: 'JSON', pdf: 'PDF' }

export default function Moodle() {
  const [selectedPath, setSelectedPath] = useState<string>(
    allFiles.find(f => f.type === 'md')?.path ?? allFiles[0]?.path ?? '',
  )
  const [suche, setSuche] = useState('')
  const [cache, setCache] = useState<Record<string, string>>({})

  const selected = allFiles.find(f => f.path === selectedPath)
  const content = selected ? cache[selected.path] : undefined
  const istText = selected?.type === 'md' || selected?.type === 'txt' || selected?.type === 'json'
  const laedt = !!selected && istText && content === undefined

  // Textinhalt der gewählten Datei bei Bedarf nachladen.
  useEffect(() => {
    if (!selected || !istText || !selected.load) return
    if (cache[selected.path] !== undefined) return
    let aktiv = true
    selected.load().then(text => {
      if (aktiv) setCache(prev => ({ ...prev, [selected.path]: text }))
    })
    return () => {
      aktiv = false
    }
  }, [selected, istText, cache])

  const gruppen = useMemo(() => {
    const q = suche.trim().toLowerCase()
    const gefiltert = q ? allFiles.filter(f => f.path.toLowerCase().includes(q)) : allFiles
    const map = new Map<string, MoodleFile[]>()
    for (const f of gefiltert) {
      const liste = map.get(f.folder) ?? []
      liste.push(f)
      map.set(f.folder, liste)
    }
    return [...map.entries()]
  }, [suche])

  const html = useMemo(() => {
    if (selected?.type === 'md' && content != null) {
      return marked.parse(content, { async: false, gfm: true }) as string
    }
    return ''
  }, [selected, content])

  return (
    <div>
      <div className="section-header">
        <h2>Moodle</h2>
        <p>Alle Kursdateien an einem Ort. Markdown wird formatiert dargestellt, PDFs direkt angezeigt.</p>
      </div>

      <div className="moodle-layout">
        <aside className="moodle-sidebar" aria-label="Dateien">
          <input
            className="moodle-search"
            type="search"
            placeholder="Datei suchen…"
            value={suche}
            onChange={e => setSuche(e.target.value)}
          />
          {gruppen.map(([folder, files]) => (
            <div key={folder} className="moodle-group">
              <div className="moodle-group-title">{folder}</div>
              <ul>
                {files.map(f => (
                  <li key={f.path}>
                    <button
                      type="button"
                      className={`moodle-file${f.path === selectedPath ? ' active' : ''}`}
                      onClick={() => setSelectedPath(f.path)}
                      title={f.name}
                    >
                      <span className={`moodle-badge moodle-badge--${f.type}`}>{typeLabel[f.type]}</span>
                      <span className="moodle-file-name">{f.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {gruppen.length === 0 && <p className="moodle-empty">Keine Datei gefunden.</p>}
        </aside>

        <div className="moodle-viewer">
          {!selected && <p className="moodle-empty">Keine Datei ausgewählt.</p>}
          {selected && (
            <>
              <div className="moodle-viewer-head">
                <span className={`moodle-badge moodle-badge--${selected.type}`}>{typeLabel[selected.type]}</span>
                <span className="moodle-viewer-path">{selected.path}</span>
              </div>
              {laedt && <p className="moodle-empty">Lädt…</p>}
              {selected.type === 'md' && !laedt && (
                <div className="md-body" dangerouslySetInnerHTML={{ __html: html }} />
              )}
              {(selected.type === 'txt' || selected.type === 'json') && !laedt && (
                <pre className="moodle-pre">{content}</pre>
              )}
              {selected.type === 'pdf' && (
                <iframe className="moodle-pdf" src={selected.url} title={selected.name} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
