import { useInfiniteQuery } from "@tanstack/react-query";

export function useProductAPI(queryKey: string[], path: string) {
    const { data, isFetching, status, error, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage, isFetchingNextPage, isFetchingPreviousPage, refetch } = useInfiniteQuery({
        queryKey,
        retry: true,
        retryDelay: 1000,
        initialPageParam: 0,
        getNextPageParam: (lastPage: any, _, lastPageParam) => lastPage.length === 1 ? undefined : lastPageParam + 1,
        getPreviousPageParam: (__, _, firstPageParam) => firstPageParam <= 1 ? undefined : firstPageParam - 1,
        queryFn: async ({ pageParam }) => fetch(`/api/${path}?cursor=${pageParam}`).then(res => res.json()),
    })

    return { data, error, status, isFetching, isFetchingNextPage, isFetchingPreviousPage, hasPreviousPage, hasNextPage, fetchNextPage, fetchPreviousPage, refetch }
}
export function useProductSearchAPI(queryKey: string[], path: string) {
    const { data, isFetching, status, error, fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage, isFetchingNextPage, isFetchingPreviousPage } = useInfiniteQuery({
        queryKey,
        retry: true,
        retryDelay: 1000,
        initialPageParam: 0,
        getNextPageParam: (lastPage: any, _, lastPageParam) => lastPage.length === 1 ? undefined : lastPageParam + 1,
        getPreviousPageParam: (__, _, firstPageParam) => firstPageParam <= 1 ? undefined : firstPageParam - 1,
        queryFn: async ({ pageParam }) => fetch(`/api/${path}?cursor=${pageParam}`).then(res => res.json()),
    })

    return { data, error, status, isFetching, isFetchingNextPage, isFetchingPreviousPage, hasPreviousPage, hasNextPage, fetchNextPage, fetchPreviousPage }
}
