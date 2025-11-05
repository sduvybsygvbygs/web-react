import { useEffect, useState } from 'react';

export function useFetchEmployees(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const ctrl = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError('');

                const res = await fetch(url, { signal: ctrl.signal });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const ct = res.headers.get('content-type') || '';
                if (!ct.includes('application/json')) throw new Error('Unexpected content-type');

                const json = await res.json();
                setData(json);
            } catch (e) {
                if (e.name !== 'AbortError') setError(e.message || 'Request failed');
            } finally {
                setLoading(false);
            }
        })();

        return () => ctrl.abort();
    }, [url]);

    return { data, loading, error };
}