interface Props {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: Props) {
  return (
    <header>
      <div>
        <div className="logo">
          BWL<span>.</span>1
        </div>
        <div className="subtitle">Allgemeine Betriebswirtschaftslehre I &mdash; Übungsfragen mit Lösungen</div>
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
        title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  )
}
