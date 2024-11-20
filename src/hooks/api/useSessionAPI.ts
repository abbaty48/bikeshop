import { useGoogleLogin } from '@react-oauth/google'
import { QueryClient } from '@tanstack/react-query';
import { googleLogout } from '@react-oauth/google'
import { useAuth } from '@hooks/useAuth';
import { TProfile } from '@libs/types';
import jwtEncode from 'jwt-encode'
import { useCallback } from "react"
import cookie from "js-cookie";

export function useSessionAPI() {
    const { updateProfile, resetProfile } = useAuth()
    const login = useGoogleLogin({
        onSuccess: async ({ access_token }) => {
            try {
                const _profile = await (new QueryClient).fetchQuery<TProfile>({
                    queryKey: ['googleProfile'],
                    queryFn: () => fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`).then(res => res.json())
                })
                updateProfile(_profile)
                cookie.set(import.meta.env.VITE_COOKIENAME, jwtEncode(_profile, import.meta.env.VITE_JWTSECRET), { secure: true, expires: 1 })
                /* Add user to the db */
                await (new QueryClient).fetchQuery({
                    queryKey: ['addingUser'],
                    queryFn: () => fetch(`/api/users`, {
                        method: 'post',
                        body: JSON.stringify({ id: _profile.id, email: _profile.email, name: _profile.name })
                    }
                    ).then(res => res.json())
                })
            } catch (err) {
            }
        }, onError: (_) => {
        }
    })

    const setSession = useCallback(() => login(), [])
    const unSession = useCallback(() => { resetProfile(); cookie.remove(import.meta.env.VITE_COOKIENAME); googleLogout() }, [])
    return { setSession, unSession }
}
