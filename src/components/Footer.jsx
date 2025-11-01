export default function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__brand">© {currentYear} Lab 9 by Pylypenko Artemiy</p>
                <p>Побудовано на Vite + React</p>
            </div>
        </footer>
    )
}