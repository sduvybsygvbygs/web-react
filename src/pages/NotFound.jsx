import { Link, useLocation } from "react-router";

export default function NotFound() {
    const location = useLocation();

    return (
        <section>
            <h2 className="main__title">Сторінку не знайдено (404)</h2>
            <p>
                На жаль, сторінки з адресою{" "}
                <code>{location.pathname}</code> не існує.
            </p>
            <p>Перевірте правильність URL або поверніться на головну сторінку.</p>

            <Link to="/" className="contact-form__button" replace>
                На головну
            </Link>
        </section>
    );
}