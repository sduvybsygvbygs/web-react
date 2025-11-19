import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        proxy: {
            '/echo': {
                target: 'https://postman-echo.com',
                changeOrigin: true,
                secure: true,
                rewrite: (p) => p.replace(/^\/echo/, ''),
            },
        },
    },
})
