import Card from './Card.jsx'

export default function CardGrid({ items, compact=false }){
    const cls = compact ? 'cards cards--compact' : 'cards'
    return (
        <>
            <h2 className="main__title">Останні новини</h2>
            <div className={cls}>
                {items.map(it => <Card key={it.id} item={it} />)}
            </div>
        </>
    )
}