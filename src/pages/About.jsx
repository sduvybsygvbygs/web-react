import { useMemo, useState } from 'react';
import { useFetchEmployees } from '../hooks/useFetchEmployees.js';
import EmployeeCard from '../components/EmployeeCard.jsx';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

export default function About() {
    const { data, loading, error } = useFetchEmployees(ENDPOINT);
    const [q, setQ] = useState('');

    const list = useMemo(() => {
        const items = Array.isArray(data) ? data : [];
        if (!q) return items;
        const n = q.toLowerCase();
        return items.filter(u =>
            u.name.toLowerCase().includes(n) ||
            (u.company?.name || '').toLowerCase().includes(n)
        );
    }, [data, q]);

    return (
        <>
            <h2 className="section-title">Про нас</h2>
            <p style={{ marginTop: 0 }}>
                Наша команда нижче. Спробуйте пошук за ім’ям або компанією.
            </p>

            <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1rem' }}>
                <input
                    type="search"
                    placeholder="Пошук за ім'ям/компанією…"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="contact-form__input"
                    style={{ maxWidth: 360 }}
                />
            </div>

            {loading && <p>Завантаження…</p>}
            {!loading && error && (
                <div style={{ border: '1px solid var(--border)', padding: '1rem', borderRadius: '8px' }}>
                    Помилка: {error}
                </div>
            )}
            {!loading && !error && Array.isArray(list) && list.length === 0 && <p>Даних немає</p>}

            {!loading && !error && Array.isArray(list) && list.length > 0 && (
                <div className="cards">
                    {list.map((u) => (
                        <EmployeeCard key={u.id} user={u} />
                    ))}
                </div>
            )}
        </>
    );
}