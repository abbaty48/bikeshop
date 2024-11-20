import { handlers } from "@backend/handlers/_handlers";
import { createRoot } from 'react-dom/client'
import { setupWorker } from 'msw/browser'
import { StrictMode } from 'react'
import App from '@layouts/app'
import '@styles/app.css'

(async () => {
    const worker = setupWorker(...handlers)
    if (import.meta.env.PROD) {
        // comment this import in DEV mode
        await import('../src/_backend/mockServiceWorker.js?worker')
        await worker.start()
        createRoot(document.getElementById('root')!).render(
            <StrictMode>
                <App />
            </StrictMode>
        )
    }
})()
