import { QueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { useAuth } from "../useAuth";

export function useCartAPI() {
    const { userProfile } = useAuth()
    const [isProcessing, setIsProcessing] = useState(false)

    const toggleCart = useCallback(async (cartId: string, action: 'add' | 'remove') => {
        try {
            setIsProcessing(true)
            await new QueryClient().fetchQuery({
                queryKey: ['addOrRemoveCart'],
                queryFn: () => fetch(`/api/${userProfile?.id}/carts/${cartId}/${action}`)
            })
        } catch (err) { }
        finally { setIsProcessing(false) }
    }, [userProfile])

    const inCart = useCallback((id: string) => {
        if (!userProfile) return false;
        // contact the /cart/id endpoint
    }, [])

    return { toggleCart, inCart, isProcessing }
}
