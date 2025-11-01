export default function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <h1 style={{margin: 0, color: 'var(--brand)'}}>Лабораторна робота № 9</h1>
            </div>
            <nav className="nav" aria-label="Головна навігація">
                <a className="nav__link" href="#">Головна</a>
                <a className="nav__link" href="#">Про нас</a>
                <a className="nav__link nav__link--cta" href="#">Контакти</a>
            </nav>
        </header>
    )
}