import { TPresentationPayload, TPresentationPayloadCursor } from "@libs/types";
import { useQueryClient} from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";


export function usePresentationAPI<T extends TPresentationPayload>() {
    const [isFetching, setIsFetching] = useState(false)
    const [payload, setPayload] = useState<T | undefined>()
    const qClient = useQueryClient();

    const fetchQuery = useCallback(async <T>(param: number | string) => {
        try {
            setIsFetching(true)
            const data = (await qClient.fetchQuery<T>({
                queryKey: ['cursorPresentation'],
                queryFn: () => fetch(`/api/presentations/${param}`).then(res => res.json())
            }));

            console.log('DATA: ', data);
            setPayload(data as any)
            setIsFetching(false)
        } catch (error) {
            setIsFetching(false)
            console.error('ERROR: ', error)
        }
    }, [])

    // const queryCursor = useCallback(async (cursor = 0) => await fetchQuery(cursor), [])

    const queryById = useCallback(async (id: number) => await fetchQuery(id), [])

    return { isFetching, payload, queryCursor, queryById }
}

export function useCursor<T extends TPresentationPayloadCursor>(cursor = 0) {
    const [data, setPresentation] = useState<TPresentationPayloadCursor | undefined>()
    const [isLoading, setIsLoading] = useState(false)
    const query = useQueryClient()

    const fetchNextPage = useCallback((async (cursor: number) => {
        try {
            setIsLoading(true)
            const payload = await query.fetchQuery<T>({
                queryKey: ['cursorPresentationQuery'],
                queryFn: async () => fetch(`/api/presentations/${cursor}`).then(res => res.json()),
            });
            setIsLoading(false)
            setPresentation(payload)
        } catch (error) {
            setIsLoading(false)
        }
    }), [])

    useEffect(() => {
        fetchNextPage(cursor)
    }, [])

    return { data, isLoading, fetchNextPage }
}
