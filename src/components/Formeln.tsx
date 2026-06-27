import { Referenz, type ReferenzKarte } from 'lernseiten-ui'
import { formelGruppen } from '../data/formeln'
import FormelText from './FormelText'

// Jede Formel = eine Referenz-Karte (flache Liste über alle Gruppen, in
// Daten-Reihenfolge). Der Karteninhalt (Formel + Erklärung + Varianten) wird
// als fertige Node gerendert, da BWL FormelText statt KaTeX nutzt; die
// Rechenbeispiele liegen als aufklappbare Beispiel-Nodes vor. Inhaltsverzeichnis,
// Scroll-Spy und Deep-Links kommen von der gemeinsamen Referenz-Komponente.
const karten: ReferenzKarte[] = formelGruppen.flatMap((gruppe, gi) =>
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

export default function Formeln() {
  return (
    <Referenz
      karten={karten}
      tab="formeln"
      intro="Alle Kennzahlen-Formeln mit Erklärung und Rechenbeispielen."
    />
  )
}
