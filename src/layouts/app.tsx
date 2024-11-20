import FragmentLinkProvider from '@components/fragmentLink/fragmentLinkProvider'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { AuthProvider } from '@states/providers/authProvider'
import Showcase from '@sections/showcases/showcase'
import Products from '@sections/products/products'
import Features from '@sections/features/features'
import UserFab from '@components/userFab'
import Footer from '@sections/footer/footer'
import Hero from '@sections/hero/hero'
import Alert from './alert'

export default function App() {
    return (
            <AuthProvider>
                <QueryClientProvider client={new QueryClient()}>
                    <FragmentLinkProvider>
                        <>
                            <Hero />
                            <main>
                                <Features />
                                <Showcase />
                                <Products />
                                <UserFab />
                            </main>
                            <Footer />
                            <Alert />
                        </>
                    </FragmentLinkProvider>
                </QueryClientProvider>
            </AuthProvider>
    )
}
