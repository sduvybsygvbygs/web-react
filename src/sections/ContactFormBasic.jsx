import { useState } from "react";

export default function ContactFormBasic() {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const endpoint = '/echo/post';

    async function onSubmit(e) {
        e.preventDefault();
        setStatus('loading');
        setError('');
        console.log(e);
        const form = e.target;
        const fd = new FormData(form);

        try {
            const res = await fetch(endpoint, {method: "POST", body: fd});

            if (!res.ok) {
                const errJson = await res.json().catch(() => ({}));
                throw new Error(errJson?.message || `HTTP ${res.status}`);
            }

            const json = await res.json();
            console.log(json);

            setStatus('success');
            form.reset();
        } catch (e) {
            setError(e.message || 'Network error');
            setStatus('error');
        }
    }

    return (
        <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="contact-form__item">
                <label htmlFor="name" className="contact-form__label">ПІБ</label>
                <input id="name" name="name" required className="contact-form__input" placeholder="Ваше ПІБ" />
            </div>

            <div className="contact-form__item">
                <label htmlFor="email" className="contact-form__label">Email</label>
                <input id="email" name="email" type="email" required className="contact-form__input" placeholder="you@example.com" />
            </div>

            <div className="contact-form__item">
                <label htmlFor="msg" className="contact-form__label">Повідомлення</label>
                <textarea id="msg" name="message" minLength={10} className="contact-form__textarea" placeholder="Ваше повідомлення"></textarea>
            </div>

            <button className="contact-form__button" disabled={status==='loading'}>Надіслати (FormData)</button>

            {status==='loading' && <small className="text-blue-400">Надсилання…</small>}
            {status==='error'   && <small className="text-red-600">Помилка: {error}</small>}
            {status==='success' && <small className="text-green-600">Відправлено! Перевір відповідь у консолі.</small>}
        </form>
    )
}