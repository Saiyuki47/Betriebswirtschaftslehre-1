import type { ReactNode } from 'react'
import { svgBox, tdStyle, thStyle, bilanzListenStyle } from './_base'

// Abbildungen für Kapitel 2 (Betrieblicher Lebenszyklus). Schlüssel = exakter
// `abschnitt.titel` aus themen/kapitel-2.ts. Alle Figuren sind theme-fähiges
// Inline-SVG bzw. schlichte HTML-Tabellen (keine Screenshots) und als statische
// ReactNode-Konstanten auf Modulebene definiert (keine React-Komponenten).
// Quelle: PP-Folien_BWL_2025.pdf, Folien 23–37.

// --- 2.1 Gründung -----------------------------------------------------------

/**
 * Der betriebliche Lebenszyklus als S-Kurve (Umsatz über Zeit) mit den vier
 * markierten Phasen Gründung → Wachstum → Stagnation → Schrumpfung. Zentrale
 * Abbildung des Kapitels; unter 2.1 einsortiert, da hier der Zyklus beginnt.
 */
const lebenszyklusKurve: ReactNode = (
  <svg
    viewBox="0 0 560 320"
    width="100%"
    style={{ maxWidth: 620 }}
    role="img"
    aria-label="Betrieblicher Lebenszyklus als S-Kurve des Umsatzes über die Zeit: In der Gründungsphase steigt der Umsatz nur langsam an, in der Wachstumsphase steil, in der Stagnationsphase verläuft die Kurve flach auf hohem Niveau, in der Schrumpfungsphase fällt sie wieder ab"
  >
    <defs>
      <marker id="k2ax" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--text2)" />
      </marker>
    </defs>

    {/* Achsen */}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M60 270 L520 270" markerEnd="url(#k2ax)" />
      <path d="M60 270 L60 30" markerEnd="url(#k2ax)" />
    </g>
    <text x="46" y="40" textAnchor="end" fontSize="11" fill="var(--text2)">
      Umsatz
    </text>
    <text x="512" y="292" textAnchor="end" fontSize="11" fill="var(--text2)">
      Zeit
    </text>

    {/* Phasengrenzen (senkrechte Trennlinien) */}
    <g stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4">
      <path d="M170 60 L170 270" />
      <path d="M300 60 L300 270" />
      <path d="M410 60 L410 270" />
    </g>

    {/* S-Kurve: flacher Start (Gründung) → steil (Wachstum) → Plateau (Stagnation) → Abfall (Schrumpfung) */}
    <path
      d="M60 250 C120 244 150 236 170 224 C210 200 250 120 300 96 C350 82 380 84 410 90 C445 98 480 150 510 210"
      fill="none"
      stroke="var(--blue)"
      strokeWidth="2.5"
    />

    {/* Phasenbeschriftung */}
    <g fontSize="11" fontWeight="600" fill="var(--text)" textAnchor="middle">
      <text x="115" y="52">Gründung</text>
      <text x="235" y="52">Wachstum</text>
      <text x="355" y="52">Stagnation</text>
      <text x="465" y="52">Schrumpfung</text>
    </g>

    {/* Kurz-Kennzeichnung je Phase */}
    <g fontSize="9" fill="var(--text3)" textAnchor="middle">
      <text x="115" y="262">Verluste</text>
      <text x="235" y="262">Gewinne ↑</text>
      <text x="355" y="262">gewinnträchtig</text>
      <text x="465" y="262">Umsatz ↓</text>
    </g>
  </svg>
)

/**
 * Kaufmann im HGB – Systematik der Kaufmannsarten nach dem Entstehungsgrund
 * (Folie 25): kraft Gesetz (§ 1, Istkaufmann), kraft Eintragung (§ 2, Kannk.),
 * kraft „Branche" (§ 3, Wahlrecht Land-/Forstwirtschaft), kraft Rechtsform (§ 6).
 */
const kaufmannArten: ReactNode = (
  <svg
    viewBox="0 0 560 250"
    width="100%"
    style={{ maxWidth: 620 }}
    role="img"
    aria-label="Systematik des Kaufmanns nach HGB: Kaufmann kraft Gesetz nach Paragraf 1 (Istkaufmann, betreibt ein Handelsgewerbe), kraft Eintragung nach Paragraf 2 (Kannkaufmann, Kleingewerbe im Handelsregister), kraft Branche nach Paragraf 3 (Wahlrecht der Land- und Forstwirtschaft) und kraft Rechtsform nach Paragraf 6 (Handelsgesellschaften wie OHG, KG, GmbH, AG)"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M280 46 L80 78" />
      <path d="M280 46 L215 78" />
      <path d="M280 46 L345 78" />
      <path d="M280 46 L480 78" />
    </g>
    {svgBox(200, 14, 160, 32, 'Kaufmann (HGB)', 'root')}
    {svgBox(20, 78, 120, 48, 'kraft Gesetz', 'g', '§ 1 · Istkaufmann')}
    {svgBox(155, 78, 120, 48, 'kraft Eintragung', 'e', '§ 2 · Kannkaufmann')}
    {svgBox(290, 78, 120, 48, 'kraft „Branche"', 'b', '§ 3 · Wahlrecht')}
    {svgBox(425, 78, 120, 48, 'kraft Rechtsform', 'r', '§ 6')}
    <g fontSize="9" fill="var(--text3)">
      <text x="80" y="150" textAnchor="middle">betreibt ein</text>
      <text x="80" y="162" textAnchor="middle">Handelsgewerbe</text>
      <text x="215" y="150" textAnchor="middle">Kleingewerbe im</text>
      <text x="215" y="162" textAnchor="middle">Handelsregister</text>
      <text x="350" y="150" textAnchor="middle">Land- u.</text>
      <text x="350" y="162" textAnchor="middle">Forstwirtschaft</text>
      <text x="485" y="150" textAnchor="middle">OHG, KG,</text>
      <text x="485" y="162" textAnchor="middle">GmbH, AG …</text>
    </g>
  </svg>
)

/**
 * Konstitutive Entscheidungen der Gründung (Folie 26): grundlegende,
 * langfristig bindende Weichenstellungen rund um die neue Unternehmung.
 */
const konstitutiveEntscheidungen: ReactNode = (
  <svg
    viewBox="0 0 560 220"
    width="100%"
    style={{ maxWidth: 620 }}
    role="img"
    aria-label="Konstitutive Entscheidungen der Gründung als grundlegende Weichenstellungen rund um die neue Unternehmung: Wahl der Rechtsform, Standortwahl, personaler Ausbau (Partner, Mitarbeiter), Kapitalaufnahme (Eigen-, Fremdkapital, Subventionen) und Kooperationen"
  >
    <g stroke="var(--text2)" strokeWidth="1.3" fill="none">
      <path d="M280 96 L120 46" />
      <path d="M280 96 L280 40" />
      <path d="M280 96 L440 46" />
      <path d="M280 124 L150 176" />
      <path d="M280 124 L410 176" />
    </g>
    <circle cx="280" cy="110" r="46" fill="var(--bg2)" stroke="var(--blue)" strokeWidth="2" />
    <text x="280" y="106" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">
      Konstitutive
    </text>
    <text x="280" y="120" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">
      Entscheidungen
    </text>
    {svgBox(60, 14, 130, 34, 'Wahl der Rechtsform', 'rf')}
    {svgBox(215, 8, 130, 32, 'Standortwahl', 'so', 'Faktoren')}
    {svgBox(380, 14, 150, 34, 'Personaler Ausbau', 'pa', 'Partner, Mitarbeiter')}
    {svgBox(70, 174, 160, 40, 'Kapitalaufnahme', 'ka', 'Eigen-, Fremdkapital, Subv.')}
    {svgBox(340, 176, 130, 34, 'Kooperationen', 'ko')}
  </svg>
)

// --- 2.3 Stagnation ---------------------------------------------------------

/**
 * Bindungsintensität von Unternehmenszusammenschlüssen (Folie 31): Skala von
 * lose (Kartell) über Teilintegration (Kooperation / Joint Venture) bis zur
 * vollständigen Fusion.
 */
const bindungsintensitaet: ReactNode = (
  <svg
    viewBox="0 0 560 170"
    width="100%"
    style={{ maxWidth: 620 }}
    role="img"
    aria-label="Bindungsintensität von Unternehmenszusammenschlüssen als Skala von links nach rechts zunehmend: lose (Kartell), Teilintegration bzw. Kooperation (Joint Venture) und Fusion"
  >
    <defs>
      <marker id="k2bi" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
        <path d="M0 0 L9 4 L0 8 z" fill="var(--text2)" />
      </marker>
    </defs>
    <path d="M40 96 L520 96" stroke="var(--text2)" strokeWidth="1.8" fill="none" markerEnd="url(#k2bi)" />
    <text x="40" y="128" textAnchor="start" fontSize="10" fill="var(--text3)">
      lose
    </text>
    <text x="510" y="128" textAnchor="end" fontSize="10" fill="var(--text3)">
      fest
    </text>
    <text x="280" y="150" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--text2)">
      Bindungsintensität →
    </text>
    {svgBox(60, 40, 120, 42, 'Kartell', 'k', 'z. B. OPEC')}
    {svgBox(220, 40, 130, 42, 'Kooperation', 'ko', 'z. B. Joint Venture')}
    {svgBox(390, 40, 120, 42, 'Fusion', 'f', 'Verschmelzung')}
  </svg>
)

/**
 * Richtung des Zusammenschlusses (Folie 31): horizontal (gleiche Stufe),
 * vertikal (vor-/rückwärts entlang der Wertschöpfungskette) und konglomerat
 * (verschiedene, nicht verwandte Branchen).
 */
const richtungZusammenschluss: ReactNode = (
  <svg
    viewBox="0 0 560 250"
    width="100%"
    style={{ maxWidth: 620 }}
    role="img"
    aria-label="Richtung von Unternehmenszusammenschlüssen: horizontal auf gleicher Produktionsstufe derselben Branche, vertikal entlang der Wertschöpfungskette durch Vorwärts- oder Rückwärtsintegration, und konglomerat als Zusammenschluss verschiedener, nicht verwandter Branchen"
  >
    <defs>
      <marker id="k2rz" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0 0 L6 3 L0 6 z" fill="var(--text2)" />
      </marker>
    </defs>

    {/* Horizontal */}
    <text x="20" y="34" fontSize="11" fontWeight="700" fill="var(--text)">Horizontal</text>
    {svgBox(150, 18, 90, 30, 'Firma A', 'ha')}
    {svgBox(250, 18, 90, 30, 'Firma B', 'hb')}
    <path d="M240 33 L250 33" stroke="var(--text2)" strokeWidth="1.5" markerEnd="url(#k2rz)" />
    <text x="360" y="37" fontSize="9" fill="var(--text3)">gleiche Stufe / Branche</text>

    {/* Vertikal */}
    <text x="20" y="112" fontSize="11" fontWeight="700" fill="var(--text)">Vertikal</text>
    {svgBox(150, 84, 110, 30, 'Lieferant', 'vl')}
    {svgBox(150, 128, 110, 30, 'Hersteller', 'vh')}
    <path d="M205 114 L205 128" stroke="var(--green)" strokeWidth="1.5" markerEnd="url(#k2rz)" />
    <g fontSize="9" fill="var(--text3)">
      <text x="290" y="100">Rückwärtsintegration ↑</text>
      <text x="290" y="152">Vorwärtsintegration ↓ (Richtung Kunde)</text>
    </g>

    {/* Konglomerat */}
    <text x="20" y="212" fontSize="11" fontWeight="700" fill="var(--text)">Konglomerat</text>
    {svgBox(150, 196, 110, 30, 'Autohaus', 'ka')}
    {svgBox(280, 196, 130, 30, 'Currywurststand', 'kc')}
    <text x="420" y="215" fontSize="9" fill="var(--text3)">fremde Branchen</text>
  </svg>
)

/**
 * Unternehmenszusammenschlüsse in der deutschen Energiewirtschaft nach der
 * Strommarktliberalisierung 4/1998 (Folie 32) – Beispiele je Richtung mit
 * Motiv, Bindungsintensität und Zeitraum.
 */
const energiewirtschaft: ReactNode = (
  <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.82rem', color: 'var(--text)' }}>
    <caption
      style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.82rem' }}
    >
      Unternehmenszusammenschlüsse in der deutschen Energiewirtschaft, induziert durch die
      Strommarktliberalisierung (4/1998)
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle} aria-label="Merkmal"></th>
        <th scope="col" style={thStyle}>Horizontal</th>
        <th scope="col" style={thStyle}>Vertikal</th>
        <th scope="col" style={thStyle}>Konglomerat</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style={thStyle}>Beispiele</th>
        <td style={tdStyle}>VEBA/VIAG, RWE/VEW</td>
        <td style={tdStyle}>EnBW/Neckarwerke Stuttgart („Vorwärtsintegration")</td>
        <td style={tdStyle}>Expansion u. a. in Telekommunikation, Entsorgung, Verkehr</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Motiv</th>
        <td style={tdStyle}>Marktmacht, Wachstum</td>
        <td style={tdStyle}>Endkundenstrategie, Absatzsicherung</td>
        <td style={tdStyle}>Risikostreuung, „Multi Utility", „Geld verstecken"</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Bindungs­intensität</th>
        <td style={tdStyle}>Fest: Fusion, Mehrheit</td>
        <td style={tdStyle}>Kooperativ: „Strat. Partnerschaft", oft 24,9 %-Beteiligung</td>
        <td style={tdStyle}>Kooperativ: (Minderheits-)Beteiligung</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Hochzeit</th>
        <td style={tdStyle}>Um 1998</td>
        <td style={tdStyle}>1998–2001</td>
        <td style={tdStyle}>Bis 1998</td>
      </tr>
      <tr>
        <th scope="row" style={thStyle}>Grund des Scheiterns?</th>
        <td style={tdStyle}>Größe hat auch Nachteile</td>
        <td style={tdStyle}>„Mondpreise"</td>
        <td style={tdStyle}>Finanzbedarf im Wettbewerb</td>
      </tr>
    </tbody>
  </table>
)

// --- 2.4 Schrumpfung --------------------------------------------------------

/**
 * Krisenursachen (Folie 34): empirisch werden endogene (im Unternehmen
 * begründete) und exogene (von außen kommende) Ursachen unterschieden.
 */
const krisenursachen: ReactNode = (
  <svg
    viewBox="0 0 560 210"
    width="100%"
    style={{ maxWidth: 620 }}
    role="img"
    aria-label="Ursachen für Krisen: endogene Ursachen entstehen im Unternehmen selbst (z. B. Managementfehler, falsche Produktpolitik, zu hohe Kosten), exogene Ursachen kommen von außen (z. B. Konjunktureinbruch, neue Wettbewerber, technologischer Wandel)"
  >
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M280 52 L150 92" />
      <path d="M280 52 L410 92" />
    </g>
    {svgBox(190, 20, 180, 32, 'Krise', 'kr', 'zugespitzte Situation')}
    <rect x="40" y="92" width="220" height="98" rx="6" fill="var(--bg2)" stroke="var(--red)" strokeWidth="1.5" />
    <text x="150" y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">
      endogen
    </text>
    <text x="150" y="128" textAnchor="middle" fontSize="9" fill="var(--text3)">
      (im Unternehmen begründet)
    </text>
    <g fontSize="9.5" fill="var(--text2)">
      <text x="52" y="148">• Managementfehler</text>
      <text x="52" y="164">• falsche Produktpolitik</text>
      <text x="52" y="180">• zu hohe Kosten</text>
    </g>
    <rect x="300" y="92" width="220" height="98" rx="6" fill="var(--bg2)" stroke="var(--amber)" strokeWidth="1.5" />
    <text x="410" y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--text)">
      exogen
    </text>
    <text x="410" y="128" textAnchor="middle" fontSize="9" fill="var(--text3)">
      (von außen kommend)
    </text>
    <g fontSize="9.5" fill="var(--text2)">
      <text x="312" y="148">• Konjunktureinbruch</text>
      <text x="312" y="164">• neue Wettbewerber</text>
      <text x="312" y="180">• technologischer Wandel</text>
    </g>
  </svg>
)

/**
 * Krisenfolgen und Alternativen der Insolvenz (Folie 35): Aus der Krise kann
 * die Insolvenz folgen; als Alternativen zum Zusammenbruch stehen Sanierung,
 * übertragene Sanierung und Liquidation offen.
 */
const krisenfolgenSanierung: ReactNode = (
  <svg
    viewBox="0 0 560 320"
    width="100%"
    style={{ maxWidth: 620 }}
    role="img"
    aria-label="Krisenfolgen: Aus der Krise kann die Insolvenz folgen (seit 1999 einheitliches Insolvenzverfahren, das Konkurs- und Vergleichsordnung ablöste). Als Alternativen zum Zusammenbruch gibt es drei Wege: die Sanierung (Rettung und Fortführung des Unternehmens), die übertragene Sanierung (Übertragung des gesunden Kerns auf einen neuen Rechtsträger) und die Liquidation (Auflösung durch Verkauf der einzelnen Vermögensgegenstände)"
  >
    <defs>
      <marker id="k2sf" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--text2)" />
      </marker>
    </defs>

    {/* Krise → Insolvenz */}
    {svgBox(200, 14, 160, 32, 'Krise', 'kr')}
    <path d="M280 46 L280 70" stroke="var(--text2)" strokeWidth="1.5" fill="none" markerEnd="url(#k2sf)" />
    <rect x="180" y="70" width="200" height="46" rx="6" fill="var(--bg2)" stroke="var(--red)" strokeWidth="2" />
    <text x="280" y="90" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text)">
      Insolvenz
    </text>
    <text x="280" y="106" textAnchor="middle" fontSize="8.5" fill="var(--text3)">
      seit 1999 · löst Konkurs- u. Vergleichsordnung ab
    </text>

    {/* Verzweigung in drei Alternativen */}
    <g stroke="var(--text2)" strokeWidth="1.5" fill="none">
      <path d="M280 116 L280 140" />
      <path d="M90 140 L470 140" />
      <path d="M90 140 L90 168" markerEnd="url(#k2sf)" />
      <path d="M280 140 L280 168" markerEnd="url(#k2sf)" />
      <path d="M470 140 L470 168" markerEnd="url(#k2sf)" />
    </g>
    <text x="280" y="134" textAnchor="middle" fontSize="9" fill="var(--text3)">Alternativen</text>

    {svgBox(20, 168, 140, 40, '1) Sanierung', 's1')}
    {svgBox(210, 168, 140, 40, '2) Übertragene', 's2', 'Sanierung')}
    {svgBox(400, 168, 140, 40, '3) Liquidation', 's3')}

    <g fontSize="9" fill="var(--text2)">
      <text x="26" y="228">Notleidendes Unter-</text>
      <text x="26" y="242">nehmen retten und</text>
      <text x="26" y="256">Leistungsfähigkeit</text>
      <text x="26" y="270">wiederherstellen.</text>

      <text x="216" y="228">Gesunder Kern geht</text>
      <text x="216" y="242">auf neuen Rechts-</text>
      <text x="216" y="256">träger über; Schulden</text>
      <text x="216" y="270">bleiben zurück.</text>

      <text x="406" y="228">Auflösung durch</text>
      <text x="406" y="242">Verkauf der einzelnen</text>
      <text x="406" y="256">Vermögens-</text>
      <text x="406" y="270">gegenstände.</text>
    </g>
  </svg>
)

/**
 * Schritte der Sanierung (Übungsbegleiter Frage 14) – typischer Ablauf von der
 * Ursachenanalyse über das Konzept bis zu den Maßnahmenbündeln.
 */
const sanierungSchritte: ReactNode = (
  <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.85rem', color: 'var(--text)' }}>
    <caption
      style={{ captionSide: 'top', textAlign: 'left', color: 'var(--text2)', paddingBottom: '0.4rem', fontSize: '0.85rem' }}
    >
      Schritte der Sanierung – „alle planvollen Maßnahmen, um ein notleidendes Unternehmen vor dem
      Zusammenbruch zu bewahren"
    </caption>
    <thead>
      <tr>
        <th scope="col" style={thStyle}>Schritt</th>
        <th scope="col" style={thStyle}>Inhalt</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" style={tdStyle}>1. Analyse</th>
        <td style={tdStyle}>Feststellung der Krisenursachen und der Sanierungsfähigkeit (Ist der Kern rettbar?).</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>2. Sanierungskonzept</th>
        <td style={tdStyle}>Leitbild und Plan der Rettung mit klaren Zielen und Zeitrahmen.</td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>3. Leistungswirtschaftlich</th>
        <td style={tdStyle}>
          <ul style={{ ...bilanzListenStyle, marginTop: 0 }}>
            <li>Kosten senken</li>
            <li>Produktprogramm bereinigen</li>
            <li>Prozesse verbessern</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>4. Finanzwirtschaftlich</th>
        <td style={tdStyle}>
          <ul style={{ ...bilanzListenStyle, marginTop: 0 }}>
            <li>frisches Kapital zuführen</li>
            <li>Schulden reduzieren / Forderungsverzicht</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th scope="row" style={tdStyle}>5. Personell</th>
        <td style={tdStyle}>Personalanpassung und ggf. Wechsel im Management.</td>
      </tr>
    </tbody>
  </table>
)

// --- Export -----------------------------------------------------------------

export const bilder: Record<string, { bild: ReactNode; seite: number }[]> = {
  '2.1 Gründung': [
    { bild: lebenszyklusKurve, seite: 23 },
    { bild: kaufmannArten, seite: 25 },
    { bild: konstitutiveEntscheidungen, seite: 26 },
  ],
  '2.3 Stagnation': [
    { bild: bindungsintensitaet, seite: 31 },
    { bild: richtungZusammenschluss, seite: 31 },
    { bild: energiewirtschaft, seite: 32 },
  ],
  '2.4 Schrumpfung': [
    { bild: krisenursachen, seite: 34 },
    { bild: krisenfolgenSanierung, seite: 35 },
    { bild: sanierungSchritte, seite: 35 },
  ],
}
