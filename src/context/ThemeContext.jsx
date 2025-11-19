import {createContext, useContext, useMemo, useState} from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({children, initial = 'light'}) {
    const [theme, setTheme] = useState(initial);
    const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

    const value = useMemo(() => ({theme, toggleTheme}), [theme]);

    return (
        <div data-theme={theme} className="app-theme-root">
            <ThemeContext value={value}>{children}</ThemeContext>
        </div>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme повинна використовуватися тільки всередині ThemeProvider');
    return ctx;
}