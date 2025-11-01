export default function Card({ item }){
    return (
        <article className="card">
            <img className="card__media" src={item.img} alt="" loading="lazy" />
            <div className="card__body">
                <h3 className="card__title">{item.title}</h3>
                <p className="card__excerpt">{item.excerpt}</p>
            </div>
            <div className="card__meta">
                <span>{new Date(item.date).toLocaleDateString('uk-UA')}</span>
                <a href="#">Читати далі</a>
            </div>
        </article>
    )
}