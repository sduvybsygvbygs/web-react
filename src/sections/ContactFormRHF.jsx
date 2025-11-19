import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactFormRHF() {
    const [status, setStatus] = useState('idle');
    const [error, setError]   = useState('');
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        defaultValues: { name: '', email: '', message: '' },
        mode: 'onSubmit',
    });

    async function onValid(data) {
        setStatus('loading'); setError('');

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errJson = await res.json().catch(() => ({}));
                throw new Error(errJson?.message || `HTTP ${res.status}`);
            }

            const json = await res.json();
            console.log('JSONPlaceholder:', json);
            setStatus('success');
            reset();
        } catch (e) {
            setError(e.message || 'Network error');
            setStatus('error');
        }
    }

    function onInvalid(formErrors) {
        console.warn('Form errors:', formErrors);
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit(onValid, onInvalid)} noValidate>
            <div className="contact-form__item">
                <label htmlFor="rhf-name" className="contact-form__label">ПІБ</label>
                <input
                    id="rhf-name"
                    className="contact-form__input"
                    placeholder="Ваше ПІБ"
                    {...register('name', {
                        required: 'Вкажіть ПІБ',
                        minLength: { value: 2, message: 'Мінімум 2 символи' },
                    })}
                />
                <small className="text-red-600">{errors.name?.message}</small>
            </div>

            <div className="contact-form__item">
                <label htmlFor="rhf-email" className="contact-form__label">Email</label>
                <input
                    id="rhf-email"
                    type="email"
                    className="contact-form__input"
                    placeholder="you@example.com"
                    {...register('email', {
                        required: 'Email обов’язковий',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Некоректний email' },
                    })}
                />
                <small className="text-red-600">{errors.email?.message}</small>
            </div>

            <div className="contact-form__item">
                <label htmlFor="rhf-msg" className="contact-form__label">Повідомлення</label>
                <textarea
                    id="rhf-msg"
                    className="contact-form__textarea"
                    placeholder="Ваше повідомлення"
                    {...register('message', {
                        required: 'Вкажіть повідомлення',
                        minLength: { value: 10, message: 'Щонайменше 10 символів' },
                    })}
                />
                <small className="text-red-600">{errors.message?.message}</small>
            </div>

            <button className="contact-form__button" disabled={isSubmitting || status==='loading'}>
                Надіслати (JSON)
            </button>

            {(isSubmitting || status==='loading') && <small className="text-blue-400">Надсилання…</small>}
            {status==='error'   && <small className="text-red-600">Помилка: {error}</small>}
            {status==='success' && <small className="text-green-600">Відправлено! Перевір відповідь у консолі.</small>}
        </form>
    )
}