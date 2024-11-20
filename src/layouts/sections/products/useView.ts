import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { IProduct } from "@backend/types";

export function useSearchView<TKind extends IProduct['kind']>(kind: TKind) {

    const qClient = useQueryClient()
    const [states, setStates] = useState(() => ({
        isView: false,
        isError: false,
        isAborted: false,
        isSearching: false,
        payload: [] as IProduct[],
    }))

    const search = useCallback(async (evt: React.FormEvent<HTMLFormElement> | undefined) => {
        evt?.preventDefault();
        const term = (evt?.currentTarget.elements['term' as keyof HTMLFormControlsCollection] as HTMLInputElement).value;
        if (term) {
            setStates(s => ({ ...s, isView: true, isSearching: true }))
            try {
                const { pages } = await qClient.fetchInfiniteQuery({
                    initialPageParam: 0,
                    queryKey: ['productSearching'],
                    getNextPageParam: (lastPage: any, _: any, lastPageParam: number) => lastPage.length === 1 ? undefined : lastPageParam + 1,
                    queryFn: async ({ pageParam }) => await fetch(`/api/products/search/${kind}/cursor=${pageParam}?name=${term}`).then(res => res.json())
                })
                setStates(s => ({
                    ...s,
                    isSearching: false,
                    payload: pages.flat(),
                }))
            } catch (error) {
                setStates(s => ({ ...s, isSearching: false, isError: true }))
            }
        }
    }, [kind])

    const abortSearch = useCallback(async () => {
        await qClient.cancelQueries({ queryKey: ['productSearching'] })
        setStates(s => ({ ...s, isSearching: false, isAborted: true, isView: false }))
    }, [])

    return { ...states, search, abortSearch }
}
