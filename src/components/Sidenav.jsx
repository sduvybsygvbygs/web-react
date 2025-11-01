export default function Sidenav(){
    return (
        <section className="sidenav">
            <aside className="sidebar">
                <h3 className="sidebar__title">Меню</h3>
                <ul className="sidebar__list">
                    <li><a href="#">Новини</a></li>
                    <li><a href="#">Довідка</a></li>
                    <li><a href="#">Налаштування</a></li>
                </ul>
            </aside>
        </section>
    )
}