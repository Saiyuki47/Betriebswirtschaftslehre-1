import type { ReactNode } from 'react'
import { svgBox, tdStyle, thStyle, baseBilder } from './_base'

// Abbildungen für Kapitel 4 (Rechtsformen und Mitbestimmung). Schlüssel = exakter
// `abschnitt.titel` aus themen/kapitel-4.ts. Helfer bei Bedarf aus './_base':
// svgBox, pyramide, tdStyle, thStyle, bilanzListenStyle, PYRAMID_CX.
// Figuren als statische ReactNode-Konstanten auf Modulebene (keine Komponenten).
//
// Hinweis zur Zusammenführung: In themenBilder/index.ts werden die Maps per
// Spread gemergt (…baseBilder, …b4). Für die beiden Schlüssel, die bereits in
// baseBilder existieren („Privatrechtliche Rechtsformen" und „Mitbestimmung –
// die deutsche ‚Spielart'"), würde b4 die Basis-Figuren sonst überschreiben.
// Deshalb werden die vorhandenen Basis-Figuren hier NICHT dupliziert, sondern
// aus baseBilder übernommen und um die neuen Figuren ergänzt.

// --- Neue Figur: Vergleichstabelle der privatrechtlichen Rechtsformen --------
/**
 * Rechtsform-Vergleich (Folie 45 + Übungsbegleiter „Zu Rechtsformen"):
 * Einzelunternehmung · Personengesellschaften (GbR/oHG/KG) · Kapital-
 * gesellschaften (GmbH/AG) nach Haftung, Mindestkapital, Geschäftsführung,
 * Gewinnverteilung und gesetzlicher Regelung.
 */
const rechtsformVergleich: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.8rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Vergleich der wichtigsten privatrechtlichen Rechtsformen
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Merkmal</th>
        <th scope="col" style={thStyle}>Einzel&shy;unternehmung</th>
        <th scope="col" style={thStyle}>GbR / oHG</th>
        <th scope="col" style={thStyle}>KG</th>
        <th scope="col" style={thStyle}>GmbH</th>
        <th scope="col" style={thStyle}>AG</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style={thStyle}>Art</th>
        <td style={tdStyle}>Einzelne Person</td>
        <td style={tdStyle} colSpan={2}>Personengesellschaft</td>
        <td style={tdStyle} colSpan={2}>Kapitalgesellschaft (jur. Person)</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Gesetz</th>
        <td style={tdStyle}>§§ 17–37 HGB</td>
        <td style={tdStyle}>§§ 705–740 BGB / §§ 105–160 HGB</td>
        <td style={tdStyle}>§§ 161–177 HGB</td>
        <td style={tdStyle}>GmbHG</td>
        <td style={tdStyle}>AktG</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Haftung</th>
        <td style={tdStyle}>unbeschränkt, persönlich (Inhaber)</td>
        <td style={tdStyle}>unbeschränkt, persönlich &amp; solidarisch</td>
        <td style={tdStyle}>Komplementär unbeschränkt · Kommanditist nur bis Einlage</td>
        <td style={tdStyle}>beschränkt auf das Gesellschafts&shy;vermögen</td>
        <td style={tdStyle}>beschränkt (wie GmbH)</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Mindest&shy;kapital</th>
        <td style={tdStyle}>keins</td>
        <td style={tdStyle}>keins</td>
        <td style={tdStyle}>keins</td>
        <td style={tdStyle}>25.000 € Stammkapital</td>
        <td style={tdStyle}>50.000 € Grundkapital</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Geschäfts&shy;führung</th>
        <td style={tdStyle}>Inhaber</td>
        <td style={tdStyle}>jeder Gesellschafter allein</td>
        <td style={tdStyle}>Komplementär(e)</td>
        <td style={tdStyle}>Geschäftsführer</td>
        <td style={tdStyle}>Vorstand</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Gewinn&shy;verteilung</th>
        <td style={tdStyle}>ganz an den Inhaber</td>
        <td style={tdStyle}>unter den Gesellschaftern</td>
        <td style={tdStyle}>unter den Gesellschaftern (Kommanditist bis Einlage)</td>
        <td style={tdStyle}>nach Kapitalanteilen an die Gesellschafter</td>
        <td style={tdStyle}>je Aktie an die Aktionäre (Dividende)</td>
      </tr>
    </tbody>
  </table>
)

// --- Neue Figur: Struktur der öffentlich-rechtlichen Rechtsformen ------------
/** Baum der öffentlich-rechtlichen Formen nach Rechtspersönlichkeit (Folie 45). */
const oeffentlichRechtlich: ReactNode = (
  <svg
    viewBox="0 0 480 250"
    width="100%"
    style={{ maxWidth: 520 }}
    role="img"
    aria-label="Öffentlich-rechtliche Rechtsformen gegliedert nach Rechtspersönlichkeit: ohne eigene Rechtspersönlichkeit sind Regiebetrieb, Eigenbetrieb und Sondervermögen; mit eigener Rechtspersönlichkeit sind Körperschaft, Anstalt und Stiftung des öffentlichen Rechts"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M240 44 L120 82" />
      <path d="M240 44 L360 82" />
    </g>
    {svgBox(150, 12, 180, 32, 'Öffentlich-rechtlich', 'root')}
    {svgBox(20, 82, 200, 40, 'Ohne eigene', 'ohne', 'Rechtspersönlichkeit')}
    {svgBox(260, 82, 200, 40, 'Mit eigener', 'mit', 'Rechtspersönlichkeit')}
    <g fontSize="10.5" fill="var(--text2)">
      <text x="30" y="150">• Regiebetrieb</text>
      <text x="30" y="168">• Eigenbetrieb</text>
      <text x="30" y="186">• Sondervermögen</text>
      <text x="270" y="150">• Körperschaft d. ö. R.</text>
      <text x="270" y="168">• Anstalt d. ö. R.</text>
      <text x="270" y="186">• Stiftung d. ö. R.</text>
    </g>
    <text x="240" y="224" textAnchor="middle" fontSize="9.5" fill="var(--text3)" fontStyle="italic">
      Kennzeichen (Gutenberg): Gemeineigentum · Organprinzip · zentrale Planerfüllung
    </text>
  </svg>
)

// --- Neue Figur: Ebenen der Mitbestimmung (ARM vs. UMB) ----------------------
/** Überblick der zwei Mitbestimmungsebenen (Folien 47/48/51). */
const mitbestimmungEbenen: ReactNode = (
  <svg
    viewBox="0 0 500 260"
    width="100%"
    style={{ maxWidth: 540 }}
    role="img"
    aria-label="Die Mitbestimmung teilt sich in zwei Ebenen: die arbeitsrechtliche Mitbestimmung (ARM) auf Betriebsebene über den Betriebsrat nach dem Betriebsverfassungsgesetz, und die unternehmerische Mitbestimmung (UMB) im Aufsichtsrat der Kapitalgesellschaft nach MontanMitbestG, MitbestG und Drittelbeteiligungsgesetz"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M250 46 L130 84" />
      <path d="M250 46 L370 84" />
    </g>
    {svgBox(160, 14, 180, 32, 'Mitbestimmung', 'root')}
    {svgBox(20, 84, 210, 42, 'Arbeitsrechtlich (ARM)', 'arm', 'Betriebsebene')}
    {svgBox(270, 84, 210, 42, 'Unternehmerisch (UMB)', 'umb', 'Aufsichtsrat')}
    <g fontSize="10" fill="var(--text2)">
      <text x="30" y="152">Organ: Betriebsrat</text>
      <text x="30" y="170">Gesetz: BetrVG (1952/1972)</text>
      <text x="30" y="188">ab &gt; 500 (bzw. 5) Mitarbeiter</text>
      <text x="30" y="206">Mitwirkung + Mitbestimmung</text>
      <text x="280" y="152">Organ: Aufsichtsrat</text>
      <text x="280" y="170">MontanMitbestG · MitbestG</text>
      <text x="280" y="188">· DrittelbG</text>
      <text x="280" y="206">AN-Sitze im AR</text>
    </g>
    <text x="250" y="240" textAnchor="middle" fontSize="9.5" fill="var(--text3)" fontStyle="italic">
      Begründung: Menschenwürde · Gleichberechtigung von Kapital u. Arbeit · Demokratieprinzip
    </text>
  </svg>
)

// --- Neue Figur: Gesetze der unternehmerischen Mitbestimmung -----------------
/** Vergleich der drei UMB-Gesetze im Aufsichtsrat (Folie 52). */
const umbGesetze: ReactNode = (
  <table
    style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.8rem', color: 'var(--text)' }}
  >
    <caption style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}>
      Gesetze zur unternehmerischen Mitbestimmung (Sitze im Aufsichtsrat)
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Merkmal</th>
        <th scope="col" style={thStyle}>MontanMitbestG (1951)</th>
        <th scope="col" style={thStyle}>MitbestG (1976)</th>
        <th scope="col" style={thStyle}>DrittelbG (2004)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style={thStyle}>Erfasste Unternehmen</th>
        <td style={tdStyle}>jur. Personen der Montanindustrie &gt; 1.000 Beschäftigte</td>
        <td style={tdStyle}>jur. Personen &gt; 2.000 Beschäftigte</td>
        <td style={tdStyle}>jur. Personen &gt; 500 Beschäftigte</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Sitzverhältnis (AG : AN)</th>
        <td style={tdStyle}>1 : 1 plus neutrales Mitglied</td>
        <td style={tdStyle}>1 : 1, doppeltes Stimmrecht des AR-Vorsitzenden (AG-Lager)</td>
        <td style={tdStyle}>2 : 1 (AN nur ⅓)</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>AR-Mitglieder</th>
        <td style={tdStyle}>11–21 (ungerade)</td>
        <td style={tdStyle}>12–20</td>
        <td style={tdStyle}>3–21</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>AN-Vertreter</th>
        <td style={tdStyle}>Arbeiter, Angestellte, Gewerkschafts&shy;vertreter</td>
        <td style={tdStyle}>je Arbeiter, Angestellte, leit. Angestellte, Gewerkschaft; seit 2015 Frauenquote</td>
        <td style={tdStyle}>Arbeitnehmer&shy;vertreter (⅓ der Sitze)</td>
      </tr>
    </tbody>
  </table>
)

// --- Export -----------------------------------------------------------------
// Vorhandene Basis-Figuren (nicht dupliziert) + neue Figuren.

export const bilder: Record<string, { bild: ReactNode; seite: number }[]> = {
  'Privatrechtliche Rechtsformen': [
    ...baseBilder['Privatrechtliche Rechtsformen'],
    { bild: rechtsformVergleich, seite: 45 },
  ],
  'Öffentlich-rechtliche Rechtsformen': [{ bild: oeffentlichRechtlich, seite: 45 }],
  'Mitbestimmung – die deutsche „Spielart"': [
    { bild: mitbestimmungEbenen, seite: 47 },
    ...baseBilder['Mitbestimmung – die deutsche „Spielart"'],
    { bild: umbGesetze, seite: 52 },
  ],
}
