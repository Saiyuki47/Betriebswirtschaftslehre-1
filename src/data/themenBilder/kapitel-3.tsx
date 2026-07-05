import type { ReactNode } from 'react'
import type { BeschriftungSlot } from 'lernseiten-ui'
import {
  svgBox,
  quizBoxen,
  boxSlots,
  tdStyle,
  thStyle,
  baseBilder,
  LEER_ARIA,
  type QuizBoxDef,
  type BeschriftungsBild,
} from './_base'

// Abbildungen für Kapitel 3 (Mengen und Werte). Schlüssel = exakter
// `abschnitt.titel` aus themen/kapitel-3.ts. Alle Figuren sind statische
// ReactNode-Konstanten auf Modulebene (keine React-Komponenten) und nutzen
// ausschließlich Theme-Variablen (var(--…)), damit sie im Hell- und Dunkel-
// Modus sowie im Druck (feste Druckfarben) lesbar bleiben; SVG-Figuren als
// Builder `(leer: boolean) => ReactNode` mit voller + leerer Quiz-Variante
// (siehe _base.tsx). Nachgebaut aus PP-Folien_BWL_2025.pdf, Folien 39–44; die
// Bilanz-Tabelle (Folie 40) liegt bereits als Basis-Figur in _base.tsx.

// --- 3.1 Bilanz-Aufbau: Aktiva vs. Passiva (schematisch, Folie 39/40) --------
/**
 * Grundschema der Bilanz: zwei Seiten, betragsmäßig ausgeglichen.
 * Links Aktiva (Mittelverwendung) mit Anlage-/Umlaufvermögen, rechts Passiva
 * (Mittelherkunft) mit Eigen-/Fremdkapital. Pfeile zeigen die Ordnungslogik:
 * Aktiva von langfristig → kurzfristig, Passiva von Eigen- → Fremdkapital.
 */
const bilanzBoxen: QuizBoxDef[] = [
  { x: 30, y: 66, w: 220, h: 78, label: 'A. Anlagevermögen', key: 'av', sub: 'immat. VG · Sachanlagen · Finanzanlagen' },
  { x: 30, y: 152, w: 220, h: 78, label: 'B. Umlaufvermögen', key: 'uv', sub: 'Vorräte · Forderungen · Wertpapiere · flüssige Mittel' },
  { x: 30, y: 238, w: 220, h: 26, label: 'C. Rechnungsabgrenzung', key: 'rap-a' },
  { x: 270, y: 66, w: 220, h: 60, label: 'A. Eigenkapital', key: 'ek', sub: 'inkl. Jahresüberschuss (aus GuV)' },
  { x: 270, y: 134, w: 220, h: 44, label: 'B. Rückstellungen', key: 'rs', sub: 'ungewisse Verpflichtungen' },
  { x: 270, y: 186, w: 220, h: 44, label: 'C. Verbindlichkeiten', key: 'vb', sub: 'Fremdkapital · Kredite, Lieferanten' },
  { x: 270, y: 238, w: 220, h: 26, label: 'D. Rechnungsabgrenzung', key: 'rap-p' },
]
const bilanzAufbauBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 520 320"
    width="100%"
    style={leer ? undefined : { maxWidth: 560 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Grundaufbau der Bilanz als betragsmäßig ausgeglichenes T-Konto: linke Aktivseite (Mittelverwendung) mit Anlagevermögen und darunter Umlaufvermögen, geordnet von langfristig zu kurzfristig; rechte Passivseite (Mittelherkunft) mit Eigenkapital und darunter Fremdkapital (Rückstellungen und Verbindlichkeiten). Beide Seiten ergeben dieselbe Bilanzsumme (Gesamtkapital).'
    }
  >
    <text x="260" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">
      Bilanz zum Stichtag – zwei Seiten, gleiche Summe
    </text>

    {/* Spaltenüberschriften */}
    {!leer && (
      <text x="140" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--blue)">
        Aktiva
      </text>
    )}
    <text x="140" y="54" textAnchor="middle" fontSize="9.5" fill="var(--text3)">
      Mittelverwendung (Vermögen)
    </text>
    {!leer && (
      <text x="380" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--blue)">
        Passiva
      </text>
    )}
    <text x="380" y="54" textAnchor="middle" fontSize="9.5" fill="var(--text3)">
      Mittelherkunft (Kapital)
    </text>

    {/* Aktiv- und Passivseite */}
    {quizBoxen(bilanzBoxen, leer)}

    {/* Ordnungspfeile an den Außenseiten */}
    <g stroke="var(--text3)" strokeWidth="1.3" fill="none">
      <path d="M18 70 L18 260" markerEnd="url(#pf3down)" />
      <path d="M502 70 L502 260" markerEnd="url(#pf3down)" />
    </g>
    <text x="12" y="66" fontSize="8.5" fill="var(--text3)" transform="rotate(-90 12 66)" textAnchor="end">
      langfristig → kurzfristig
    </text>
    <text x="514" y="66" fontSize="8.5" fill="var(--text3)" transform="rotate(90 514 66)" textAnchor="start">
      Eigen- → Fremdkapital
    </text>

    {/* Bilanzsumme = Ausgleich */}
    <g stroke="var(--green)" strokeWidth="1.5" fill="none">
      <path d="M30 284 L250 284" />
      <path d="M270 284 L490 284" />
    </g>
    <text x="140" y="298" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--green)">
      Bilanzsumme
    </text>
    <text x="380" y="298" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--green)">
      = Bilanzsumme
    </text>
    <text x="260" y="314" textAnchor="middle" fontSize="9.5" fill="var(--text2)">
      Σ Aktiva = Σ Passiva  (= Gesamtkapital)
    </text>

    <defs>
      <marker id="pf3down" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto">
        <path d="M0 0 L6 0 L3 6 z" fill="var(--text3)" />
      </marker>
    </defs>
  </svg>
)
const bilanzAufbau = bilanzAufbauBau(false)
const bilanzAufbauLeer = bilanzAufbauBau(true)
const bilanzAufbauSlots: BeschriftungSlot[] = [
  { label: 'Aktiva', x: 88, y: 27, w: 104, h: 18 },
  { label: 'Passiva', x: 328, y: 27, w: 104, h: 18 },
  ...boxSlots(bilanzBoxen),
]

// --- 3.1 GuV-Struktur + Zusammenhang mit der Bilanz (Folie 38/39) ------------
/**
 * GuV als Stromrechnung: Aufwendungen gegen Erträge; der Saldo ist der
 * Jahresüberschuss (Ertrag > Aufwand) bzw. Jahresfehlbetrag. Ein Pfeil zeigt,
 * wie der Jahresüberschuss in das Eigenkapital der Bilanz übergeht.
 */
const guvEkBox: QuizBoxDef[] = [
  { x: 150, y: 236, w: 220, h: 44, label: 'Bilanz: Eigenkapital', key: 'ek-b', sub: 'nimmt den Jahresüberschuss auf' },
]
const guvStrukturBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 520 300"
    width="100%"
    style={leer ? undefined : { maxWidth: 560 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Struktur der Gewinn- und Verlustrechnung als T-Konto: links die Aufwendungen (Material, Personal, Abschreibungen, Zinsen), rechts die Erträge (v. a. Umsatzerlöse). Übersteigen die Erträge die Aufwendungen, ergibt der Saldo einen Jahresüberschuss; dieser fließt als Position in das Eigenkapital der Bilanz.'
    }
  >
    <text x="260" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">
      Gewinn- und Verlustrechnung (Stromrechnung der Periode)
    </text>

    {!leer && (
      <>
        <text x="140" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--red)">
          Soll: Aufwendungen
        </text>
        <text x="380" y="40" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--green)">
          Haben: Erträge
        </text>
      </>
    )}

    {/* Aufwandsseite */}
    <rect x="30" y="52" width="220" height="150" rx="6" fill="var(--bg2)" stroke="var(--red)" strokeWidth="1.5" />
    <g fontSize="10.5" fill="var(--text)">
      <text x="42" y="76">Materialaufwand</text>
      <text x="42" y="98">Personalaufwand</text>
      <text x="42" y="120">Abschreibungen</text>
      <text x="42" y="142">Zinsen / sonstiger Aufwand</text>
    </g>
    {/* Saldo (Jahresüberschuss) auf der kleineren Seite */}
    <rect x="30" y="160" width="220" height="42" rx="0" fill="var(--green-dim)" stroke="var(--green)" strokeWidth="1.3" />
    {!leer && (
      <text x="140" y="180" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--text)">
        Saldo = Jahresüberschuss
      </text>
    )}
    <text x="140" y="195" textAnchor="middle" fontSize="9" fill="var(--text2)">
      (Ausgleichsposten, wenn Ertrag &gt; Aufwand)
    </text>

    {/* Ertragsseite */}
    <rect x="270" y="52" width="220" height="150" rx="6" fill="var(--bg2)" stroke="var(--green)" strokeWidth="1.5" />
    <g fontSize="10.5" fill="var(--text)">
      <text x="282" y="76">Umsatzerlöse</text>
      <text x="282" y="98">Bestandserhöhungen</text>
      <text x="282" y="120">sonstige betriebl. Erträge</text>
      <text x="282" y="142">Finanzerträge</text>
    </g>

    {/* Bilanz-Kasten mit Eigenkapital, in den der JÜ fließt */}
    {quizBoxen(guvEkBox, leer)}

    {/* Pfeil Jahresüberschuss → Eigenkapital der Bilanz */}
    <g stroke="var(--green)" strokeWidth="1.8" fill="none">
      <path d="M140 202 L140 258 L148 258" markerEnd="url(#pf3g)" />
    </g>
    <text x="150" y="224" fontSize="9.5" fill="var(--green)">
      geht in die Handelsbilanz ein
    </text>

    <defs>
      <marker id="pf3g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--green)" />
      </marker>
    </defs>
  </svg>
)
const guvStruktur = guvStrukturBau(false)
const guvStrukturLeer = guvStrukturBau(true)
const guvStrukturSlots: BeschriftungSlot[] = [
  { label: 'Soll: Aufwendungen', x: 50, y: 27, w: 180, h: 18 },
  { label: 'Haben: Erträge', x: 290, y: 27, w: 180, h: 18 },
  { label: 'Saldo = Jahresüberschuss', x: 40, y: 166, w: 200, h: 19 },
  ...boxSlots(guvEkBox),
]

// --- 3.1 Bestandsgrößen vs. Stromgrößen (Zeitpunkt vs. Zeitraum) -------------
/**
 * Zeitachse eines Geschäftsjahres: Die Bilanz misst Bestände am Stichtag
 * (Zeitpunkt), die GuV misst Ströme über die Periode (Zeitraum). Anfangs- und
 * Schlussbilanz „klammern" den Zeitraum ein, den die GuV abbildet.
 */
const bestandBoxen: QuizBoxDef[] = [
  { x: 30, y: 66, w: 110, h: 34, label: 'Anfangsbilanz', key: 'ab', sub: 'Bestand' },
  { x: 384, y: 66, w: 112, h: 34, label: 'Schlussbilanz', key: 'sb', sub: 'Bestand' },
]
const bestandStromBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 520 220"
    width="100%"
    style={leer ? undefined : { maxWidth: 560 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Unterschied zwischen Bestands- und Stromgrößen: Auf einer Zeitachse von Jahresbeginn (1.1.) bis Jahresende (31.12.) misst die Bilanz Bestandsgrößen zu einem Zeitpunkt (Anfangs- und Schlussbilanz), während die Gewinn- und Verlustrechnung als Stromgröße die Aufwendungen und Erträge über den gesamten Zeitraum erfasst.'
    }
  >
    <text x="260" y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">
      Bestandsgrößen (Zeitpunkt) vs. Stromgrößen (Zeitraum)
    </text>

    {/* Zeitachse */}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M60 120 L460 120" markerEnd="url(#pf3ax)" />
      <path d="M80 112 L80 128" />
      <path d="M440 112 L440 128" />
    </g>
    <text x="80" y="146" textAnchor="middle" fontSize="10" fill="var(--text2)">
      1.1. (Beginn)
    </text>
    <text x="440" y="146" textAnchor="middle" fontSize="10" fill="var(--text2)">
      31.12. (Ende)
    </text>
    <text x="466" y="124" fontSize="9.5" fill="var(--text3)">
      Zeit
    </text>

    {/* Bilanz-Punkte (Bestand) */}
    <circle cx="80" cy="120" r="5" fill="var(--blue)" />
    <circle cx="440" cy="120" r="5" fill="var(--blue)" />
    {quizBoxen(bestandBoxen, leer)}
    <g stroke="var(--blue)" strokeWidth="1.2" fill="none" strokeDasharray="3 3">
      <path d="M85 100 L85 115" />
      <path d="M440 100 L440 115" />
    </g>

    {/* GuV-Klammer (Strom) */}
    <g stroke="var(--green)" strokeWidth="1.6" fill="none">
      <path d="M80 176 L440 176" />
      <path d="M80 168 L80 176" />
      <path d="M440 168 L440 176" />
    </g>
    <rect x="200" y="186" width="120" height="26" rx="6" fill="var(--green-dim)" stroke="var(--green)" strokeWidth="1.3" />
    {!leer && (
      <text x="260" y="203" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--text)">
        GuV: Aufwand &amp; Ertrag
      </text>
    )}

    <text x="150" y="120" textAnchor="middle" fontSize="9.5" fill="var(--text3)" fontStyle="italic">
      Bilanz = Momentaufnahme
    </text>

    <defs>
      <marker id="pf3ax" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--text2)" />
      </marker>
    </defs>
  </svg>
)
const bestandStrom = bestandStromBau(false)
const bestandStromLeer = bestandStromBau(true)
const bestandStromSlots: BeschriftungSlot[] = [
  ...boxSlots(bestandBoxen),
  { label: 'GuV: Aufwand & Ertrag', x: 203, y: 188, w: 114, h: 22 },
]

// --- 3.1 Inventur → Inventar → Bilanz (Ableitungskette) ----------------------
/** Von der körperlichen Bestandsaufnahme zur gegliederten Bilanz. */
const inventurBoxen: QuizBoxDef[] = [
  { x: 20, y: 44, w: 140, h: 54, label: 'Inventur', key: 'iv', sub: 'zählen · messen · wiegen' },
  { x: 190, y: 44, w: 140, h: 54, label: 'Inventar', key: 'in', sub: 'Bestandsverzeichnis: Art · Menge · Wert' },
  { x: 360, y: 44, w: 140, h: 54, label: 'Bilanz', key: 'bi', sub: 'kurz, gegliedert (Aktiva/Passiva)' },
]
const inventurBilanzBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 520 130"
    width="100%"
    style={leer ? undefined : { maxWidth: 540 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Ableitungskette der Bilanz: Aus der Inventur (körperliche Bestandsaufnahme durch Zählen, Messen, Wiegen) entsteht das Inventar (ausführliches, geordnetes Bestandsverzeichnis nach Art, Menge und Wert), aus dem die zusammengefasste, gegliederte Bilanz abgeleitet wird.'
    }
  >
    {quizBoxen(inventurBoxen, leer)}
    <g stroke="var(--text2)" strokeWidth="1.6" fill="none">
      <path d="M160 71 L188 71" markerEnd="url(#pf3iv)" />
      <path d="M330 71 L358 71" markerEnd="url(#pf3iv)" />
    </g>
    <text x="175" y="64" textAnchor="middle" fontSize="8.5" fill="var(--text3)">
      erfassen
    </text>
    <text x="345" y="64" textAnchor="middle" fontSize="8.5" fill="var(--text3)">
      verdichten
    </text>
    <text x="260" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">
      Von der Bestandsaufnahme zur Bilanz
    </text>
    <defs>
      <marker id="pf3iv" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--text2)" />
      </marker>
    </defs>
  </svg>
)
const inventurBilanz = inventurBilanzBau(false)
const inventurBilanzLeer = inventurBilanzBau(true)

// --- 3.2 Kennzahlen-Übersichtsschema (Arten + Einsatzgebiete, Folie 43/44) ---
/**
 * Konzeptioneller Überblick: die vier Kennzahlenarten (Wirtschaftlichkeit,
 * Produktivität, Rentabilitäten, Liquidität) plus die ergänzenden Struktur-
 * kennzahlen, dargestellt als Baum. Die ausführlichen Formeln stehen in den
 * Formel-Karten – hier nur die Einordnung.
 */
const kennzahlenBoxen: QuizBoxDef[] = [
  { x: 10, y: 82, w: 120, h: 52, label: 'Wirtschaftlichkeit', key: 'wi', sub: 'wertmäßig: Ertrag ÷ Aufwand' },
  { x: 150, y: 82, w: 120, h: 52, label: 'Produktivität', key: 'pr', sub: 'mengenmäßig: Menge ÷ Einsatz' },
  { x: 290, y: 82, w: 120, h: 52, label: 'Rentabilitäten', key: 're', sub: 'Gewinn ÷ Bezugsgröße' },
  { x: 430, y: 82, w: 120, h: 52, label: 'Liquidität', key: 'li', sub: 'Zahlungsfähigkeit (I–III)' },
  { x: 10, y: 224, w: 260, h: 46, label: 'Struktur (Kapital/Vermögen)', key: 'st', sub: 'EK-Quote · Verschuldungsgrad · Anlageintensität' },
  { x: 290, y: 224, w: 260, h: 46, label: 'Fristenkongruenz', key: 'fk', sub: 'Anlagendeckung I und II' },
]
const kennzahlenSchemaBau = (leer: boolean): ReactNode => (
  <svg
    viewBox="0 0 560 320"
    width="100%"
    style={leer ? undefined : { maxWidth: 600 }}
    role="img"
    aria-label={
      leer
        ? LEER_ARIA
        : 'Übersichtsschema der betriebswirtschaftlichen Kennzahlen: Aus den Daten des Jahresabschlusses werden Kennzahlen gebildet. Hauptarten sind Wirtschaftlichkeit (wertmäßig, Ertrag zu Aufwand), Produktivität (mengenmäßig, Ausbringung zu Einsatz), Rentabilitäten mit Umsatz-, Eigenkapital- und Gesamtkapitalrentabilität sowie Liquidität in drei Graden. Ergänzend messen Strukturkennzahlen Eigenkapitalquote, Verschuldungsgrad und Anlagendeckung. Die konkreten Formeln stehen in den Formel-Karten.'
    }
  >
    {/* Wurzel */}
    {svgBox(190, 8, 180, 40, 'Kennzahlen', 'kz', 'aus dem Jahresabschluss')}

    {/* Verbindungslinien zu den vier Arten */}
    <g stroke="var(--text2)" strokeWidth="1.4" fill="none">
      <path d="M280 48 L280 62 L70 62 L70 82" />
      <path d="M280 48 L280 62 L210 62 L210 82" />
      <path d="M280 48 L280 62 L350 62 L350 82" />
      <path d="M280 48 L280 62 L490 62 L490 82" />
    </g>

    {/* Vier Hauptarten + ergänzende Kennzahlen */}
    {quizBoxen(kennzahlenBoxen, leer)}

    {/* Unterpunkte der Rentabilitäten */}
    <g stroke="var(--text3)" strokeWidth="1.2" fill="none">
      <path d="M350 134 L350 150" />
    </g>
    <rect x="286" y="150" width="128" height="58" rx="6" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="1.3" />
    <g fontSize="9.5" fill="var(--text)">
      <text x="296" y="167">• Umsatzrentabilität</text>
      <text x="296" y="182">• Eigenkapital (EKR)</text>
      <text x="296" y="197">• Gesamtkapital (GKR)</text>
    </g>

    {/* Hinweis Formeln */}
    <text x="280" y="292" textAnchor="middle" fontSize="10" fill="var(--text2)">
      Merksatz Rentabilität:  EKR &gt; GKR &gt; Fremdkapitalzins
    </text>
    <text x="280" y="308" textAnchor="middle" fontSize="9.5" fill="var(--text3)" fontStyle="italic">
      Ausführliche Formeln &amp; Rechenbeispiele: siehe Formel-Karten
    </text>
  </svg>
)
const kennzahlenSchema = kennzahlenSchemaBau(false)
const kennzahlenSchemaLeer = kennzahlenSchemaBau(true)

// --- 3.2 Einsatzgebiete von Kennzahlen (die vier Vergleiche, Folie 44) -------
const kennzahlenEinsatz: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Einsatzgebiete von Kennzahlen – die vier Vergleichsarten (Folie 44)
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Vergleichsart</th>
        <th scope="col" style={thStyle}>Was wird verglichen?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style={tdStyle}>a) Zeit- und Periodenvergleich</th>
        <td style={tdStyle}>Gleiche Kennzahl im Zeitablauf – beurteilt die innere Entwicklung des Unternehmens.</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>b) Bereichs- und Abteilungsvergleich</th>
        <td style={tdStyle}>Kennzahlen verschiedener Unternehmensbereiche untereinander.</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>c) Betriebsvergleich</th>
        <td style={tdStyle}>Vergleich mit Betrieben der Branche (engl. <strong>Benchmarking</strong>); in der Praxis oft schwierig, da Betriebe unterschiedlich bilanzieren und selten voll vergleichbar sind.</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>d) Soll-Ist-Vergleich</th>
        <td style={tdStyle}>Vorgegebene Richtgrößen (Plan) gegen die tatsächlich erreichten Werte.</td>
      </tr>
    </tbody>
  </table>
)

// --- 3.2 Eigenschaften von Kennzahlen (Folie 43) ----------------------------
const kennzahlenEigenschaften: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Kennzahlen = „quantitative Größen, die in konzentrierter Form Informationen zur Führung
      bereitstellen" – drei Eigenschaften (Folie 43)
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Eigenschaft</th>
        <th scope="col" style={thStyle}>Bedeutung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style={tdStyle}>Maßgrößencharakter</th>
        <td style={tdStyle}>Sie messen betriebliche Sachverhalte in Zahlen.</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Verdichtungscharakter</th>
        <td style={tdStyle}>Sie fassen viele Einzeldaten zu einer aussagekräftigen Größe zusammen.</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>Entscheidungsbezug</th>
        <td style={tdStyle}>Sie dienen als Grundlage für Führungsentscheidungen.</td>
      </tr>
    </tbody>
  </table>
)

// --- Export -----------------------------------------------------------------
// Schlüssel = exakter abschnitt.titel. Der Merge in themenBilder/index.ts
// spreadet baseBilder zuerst und diese Datei danach – gleiche Schlüssel würden
// die Basis-Figur also ÜBERSCHREIBEN. Damit die bereits vorhandene Basis-Figur
// „3.1 Jahresabschluss" (Handelsbilanz-Tabelle, Folie 40) erhalten bleibt, wird
// sie hier vorangestellt (Single Source of Truth: aus baseBilder referenziert,
// nicht dupliziert); danach folgen die ergänzenden Schemata.
export const bilder: Record<string, { bild: ReactNode; seite: number }[]> = {
  '3.1 Jahresabschluss': [
    ...baseBilder['3.1 Jahresabschluss'],
    { bild: bilanzAufbau, seite: 39 },
    { bild: guvStruktur, seite: 38 },
    { bild: bestandStrom, seite: 39 },
    { bild: inventurBilanz, seite: 39 },
  ],
  '3.2 Betriebswirtschaftliche Kennzahlen': [
    { bild: kennzahlenEigenschaften, seite: 43 },
    { bild: kennzahlenSchema, seite: 43 },
    { bild: kennzahlenEinsatz, seite: 44 },
  ],
}

export const beschriftungen: BeschriftungsBild[] = [
  {
    name: 'Grundaufbau der Bilanz (Aktiva/Passiva)',
    abschnitt: '3.1 Jahresabschluss',
    seite: 39,
    erklaerung:
      'Links die Aktiva (Mittelverwendung): A. Anlagevermögen, B. Umlaufvermögen, C. Rechnungsabgrenzung. Rechts die Passiva (Mittelherkunft): A. Eigenkapital, B. Rückstellungen, C. Verbindlichkeiten, D. Rechnungsabgrenzung. Beide Seiten ergeben dieselbe Bilanzsumme.',
    bild: bilanzAufbau,
    bildLeer: bilanzAufbauLeer,
    viewBoxW: 520,
    viewBoxH: 320,
    maxWidth: 560,
    slots: bilanzAufbauSlots,
  },
  {
    name: 'Struktur der GuV',
    abschnitt: '3.1 Jahresabschluss',
    seite: 38,
    erklaerung:
      'Die GuV stellt im Soll die Aufwendungen und im Haben die Erträge gegenüber; der Saldo ist der Jahresüberschuss (wenn Ertrag > Aufwand) und fließt in das Eigenkapital der Bilanz.',
    bild: guvStruktur,
    bildLeer: guvStrukturLeer,
    viewBoxW: 520,
    viewBoxH: 300,
    maxWidth: 560,
    slots: guvStrukturSlots,
  },
  {
    name: 'Bestandsgrößen vs. Stromgrößen',
    abschnitt: '3.1 Jahresabschluss',
    seite: 39,
    erklaerung:
      'Die Bilanz misst Bestände zu einem Zeitpunkt (Anfangsbilanz am 1.1., Schlussbilanz am 31.12.); die GuV erfasst Aufwand und Ertrag als Stromgrößen über den gesamten Zeitraum.',
    bild: bestandStrom,
    bildLeer: bestandStromLeer,
    viewBoxW: 520,
    viewBoxH: 220,
    maxWidth: 560,
    slots: bestandStromSlots,
  },
  {
    name: 'Von der Inventur zur Bilanz',
    abschnitt: '3.1 Jahresabschluss',
    seite: 39,
    erklaerung:
      'Inventur (zählen, messen, wiegen) → Inventar (ausführliches Bestandsverzeichnis nach Art, Menge, Wert) → Bilanz (kurz und gegliedert in Aktiva/Passiva).',
    bild: inventurBilanz,
    bildLeer: inventurBilanzLeer,
    viewBoxW: 520,
    viewBoxH: 130,
    maxWidth: 540,
    slots: boxSlots(inventurBoxen),
  },
  {
    name: 'Übersichtsschema der Kennzahlen',
    abschnitt: '3.2 Betriebswirtschaftliche Kennzahlen',
    seite: 43,
    erklaerung:
      'Die vier Hauptarten: Wirtschaftlichkeit (wertmäßig), Produktivität (mengenmäßig), Rentabilitäten (Gewinn ÷ Bezugsgröße) und Liquidität (Zahlungsfähigkeit). Ergänzend: Strukturkennzahlen (EK-Quote, Verschuldungsgrad) und Fristenkongruenz (Anlagendeckung I/II).',
    bild: kennzahlenSchema,
    bildLeer: kennzahlenSchemaLeer,
    viewBoxW: 560,
    viewBoxH: 320,
    maxWidth: 600,
    slots: boxSlots(kennzahlenBoxen),
  },
]
