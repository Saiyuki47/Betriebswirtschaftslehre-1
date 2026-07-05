import { useState, useEffect, type ReactNode } from 'react'

// Klappt den schweren Teil einer Themen-Karte (v. a. die vielen SVG-Abbildungen)
// ein und rendert ihn erst beim Klick – oder automatisch, wenn die Karte per
// Deep-Link (#<tab>/<id>) angesteuert wird (Chip aus den Übungsblättern oder
// Klick im Inhaltsverzeichnis). So bleibt der Referenz-Tab leichtgewichtig und
// schnell, und die Scroll-Position verschiebt sich nicht durch spät geladene
// Abbildungen.
export default function LazyTopic({
  id,
  tab = 'referenz',
  children,
}: {
  id: string
  tab?: string
  children: ReactNode
}) {
  const targetHash = `#${tab}/${id}`
  const [open, setOpen] = useState(
    () => typeof window !== 'undefined' && window.location.hash === targetHash,
  )

  useEffect(() => {
    if (open) return
    // Chips (echtes <a href>) feuern hashchange. Das Inhaltsverzeichnis der
    // Referenz-Komponente setzt den Hash dagegen per history.replaceState (kein
    // hashchange) – deshalb zusätzlich auf Klicks auf den passenden Link hören.
    const onHash = () => {
      if (window.location.hash === targetHash) setOpen(true)
    }
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null
      if (t?.closest?.(`a[href="${targetHash}"]`)) setOpen(true)
    }
    window.addEventListener('hashchange', onHash)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('hashchange', onHash)
      document.removeEventListener('click', onClick)
    }
  }, [open, targetHash])

  if (open) return <>{children}</>
  return (
    <button type="button" className="toggle-btn" onClick={() => setOpen(true)}>
      ▶ Inhalt &amp; Abbildungen anzeigen
    </button>
  )
}
