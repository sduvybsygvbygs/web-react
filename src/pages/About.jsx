import {useEffect, useMemo, useState} from 'react';
import EmployeeCard from '../components/EmployeeCard.jsx';
import {useDispatch, useSelector} from "react-redux";
import {fetchEmployees} from "../features/employees/employeesThunks.js";


export default function About() {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.employees);

    const [q, setQ] = useState('');

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEmployees());
        }
    }, [status, dispatch]);

    const list = useMemo(() => {
        const data = Array.isArray(items) ? items : [];
        if (!q) return data;
        const n = q.toLowerCase();
        return data.filter(
            (u) =>
                u.name.toLowerCase().includes(n) ||
                (u.company?.name || '').toLowerCase().includes(n)
        );
    }, [items, q]);

    const loading = status === 'loading';
    const hasError = status === 'failed' && error;
    const noData =
        status === 'succeeded' && Array.isArray(list) && list.length === 0;

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

            {!loading && hasError && (
                <div
                    style={{
                        border: '1px solid var(--border)',
                        padding: '1rem',
                        borderRadius: '8px',
                    }}
                >
                    Помилка: {error}
                </div>
            )}

            {!loading && !hasError && noData && <p>Даних немає</p>}


            {!loading && !hasError && Array.isArray(list) && list.length > 0 && (
                <div className="cards">
                    {list.map((u) => (
                        <EmployeeCard key={u.id} user={u} />
                    ))}
                </div>
            )}
        </>
    );
}