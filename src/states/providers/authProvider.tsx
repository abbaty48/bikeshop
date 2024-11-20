import { PropsWithChildren, useCallback, useState } from "react";
import { AuthContext } from "@states/contexts/authContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode'
import { TProfile } from "@libs/types";
import cookie from "js-cookie";

export function AuthProvider({ children }: PropsWithChildren) {

    const [userProfile, setUserProfile] = useState(() => {
        const jwt = cookie.get(import.meta.env.VITE_COOKIENAME);
        return jwt ? jwtDecode(jwt) as TProfile : null
    }
    )

    const updateProfile = useCallback((profile: Partial<TProfile>) => setUserProfile(s => ({ ...s, ...profile } as TProfile | null)), [])

    const resetProfile = useCallback(() => setUserProfile(null), [])

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENTID}>
            <AuthContext.Provider value={{ userProfile, updateProfile, resetProfile }}>{children}</AuthContext.Provider>
        </GoogleOAuthProvider>
    )
}
