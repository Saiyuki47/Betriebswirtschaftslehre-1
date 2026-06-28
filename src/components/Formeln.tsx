import { Referenz, type ReferenzKarte } from 'lernseiten-ui'
import { themen } from '../data/themen'
import { themenBilder } from '../data/themenBilder'
import { formelGruppen } from '../data/formeln'
import FormelText from './FormelText'

// Der Referenz-Tab vereint zwei Quellen in EINEM Inhaltsverzeichnis:
//  1. Themen-Karten (Kapitel mit Beschreibung, Stichpunkten, Abschnitten und den
//     nachgebauten Abbildungen inkl. Quellenangabe) – migriert aus dem früheren
//     Themen-Tab.
//  2. Formel-Karten (Kennzahlen mit Erklärung + aufklappbaren Rechenbeispielen).
// Inhalt wird als fertige Node geliefert (BWL nutzt FormelText statt KaTeX);
// Inhaltsverzeichnis, Scroll-Spy und Deep-Links kommen aus der gemeinsamen
// Referenz-Komponente.

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9äöü]+/g, '-').replace(/^-+|-+$/g, '')

const themenKarten: ReferenzKarte[] = themen.map((thema, ti) => ({
  id: `thema-${slug(thema.titel) || ti}`,
  titel: thema.titel,
  inhaltNode: (
    <>
      {thema.beschreibung && <p className="q-text">{thema.beschreibung}</p>}
      {thema.punkte && thema.punkte.length > 0 && (
        <ul className="thema-punkte">
          {thema.punkte.map(p => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      {thema.abschnitte?.map(abschnitt => {
        const figuren = themenBilder[abschnitt.titel]
        return (
          <div key={abschnitt.titel} className="thema-abschnitt">
            <h4 className="thema-abschnitt-titel">{abschnitt.titel}</h4>
            {abschnitt.beschreibung && <p className="thema-abschnitt-text">{abschnitt.beschreibung}</p>}
            {abschnitt.punkte && abschnitt.punkte.length > 0 && (
              <ul className="thema-punkte">
                {abschnitt.punkte.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {figuren?.map((figur, i) => (
              <figure
                key={`${abschnitt.titel}-fig-${figur.seite}-${i}`}
                className="thema-abschnitt-bild"
                style={{ marginTop: '.6rem' }}
              >
                {figur.bild}
                <figcaption
                  style={{ fontSize: '0.78rem', color: 'var(--text2)', opacity: 0.85, marginTop: '.4rem' }}
                >
                  📄 Folien vom Lehrer, Seite {figur.seite}
                </figcaption>
              </figure>
            ))}
          </div>
        )
      })}
    </>
  ),
}))

const formelKarten: ReferenzKarte[] = formelGruppen.flatMap((gruppe, gi) =>
  gruppe.formeln.map((formel, fi) => ({
    id: `formel-${gi}-${fi}`,
    titel: formel.kuerzel ? `${formel.name} (${formel.kuerzel})` : formel.name,
    inhaltNode: (
      <>
        <p className="formel-gruppe-titel">{gruppe.titel}</p>
        <div className="formel-main"><FormelText text={formel.formel} /></div>
        <p className="formel-erklaerung">{formel.erklaerung}</p>
        {formel.varianten && formel.varianten.length > 0 && (
          <ul className="formel-varianten">
            {formel.varianten.map(v => (
              <li key={v}><FormelText text={v} /></li>
            ))}
          </ul>
        )}
      </>
    ),
    beispieleNode: [
      {
        szenario: 'Rechenbeispiele',
        beispiele: formel.beispiele.map((bsp, i) => (
          <div key={`${gi}-${fi}-${bsp.gegeben}`} className="formel-beispiel">
            <div className="formel-bsp-label">Beispiel {i + 1}</div>
            <div className="formel-bsp-zeile">
              <span className="formel-bsp-tag">Gegeben</span>
              <span>{bsp.gegeben}</span>
            </div>
            <div className="formel-bsp-zeile">
              <span className="formel-bsp-tag">Rechnung</span>
              <FormelText className="formel-bsp-rechnung" text={bsp.rechnung} />
            </div>
            <div className="formel-bsp-zeile">
              <span className="formel-bsp-tag formel-bsp-tag--erg">Ergebnis</span>
              <FormelText className="formel-bsp-ergebnis" text={bsp.ergebnis} />
            </div>
          </div>
        )),
      },
    ],
  })),
)

const karten: ReferenzKarte[] = [...themenKarten, ...formelKarten]

export default function Formeln() {
  return (
    <Referenz
      karten={karten}
      tab="formeln"
      intro="Themen mit Abbildungen und alle Kennzahlen-Formeln – von Grund auf erklärt."
    />
  )
}
