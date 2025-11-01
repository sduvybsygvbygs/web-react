import {useState} from 'react'
import {NEWS} from '../data/news.js'
import Toggle from '../components/Toggle.jsx'
import CardGrid from '../components/CardGrid.jsx'

export default function Home() {
    const [compact, setCompact] = useState(false)
    const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        gap: '1rem',
        flexWrap: 'wrap'
    };
    return (
        <>
            <div style={styles}>
                <h2 style={{margin: 0}}>Головна</h2>

                <Toggle pressed={compact} onToggle={setCompact} onLabel="Compact: увімкнено"
                        offLabel="Compact: вимкнено"/>
            </div>

            <CardGrid items={NEWS} compact={compact}/>
        </>
    )
}