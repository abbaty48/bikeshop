import { FetchNextPageOptions, InfiniteQueryObserverResult, InfiniteData, FetchPreviousPageOptions } from '@tanstack/react-query'
import { AiOutlineLoading, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { GoChevronLeft } from 'react-icons/go'
import { ImSpinner2 } from 'react-icons/im'
import { useAuth } from '@hooks/useAuth'
import { IProduct } from '@backend/types'
import { useMemo } from 'react'
import Product from './product'

type TProp = {
    error?: string,
    products: IProduct[],
    isSearching?: boolean,
    hasNextPage?: boolean,
    hasPreviousPage?: boolean,
    isFetchingNextPage?: boolean,
    isFetchingPreviousPage?: boolean,
    fetchPreviousPage: (options?: FetchPreviousPageOptions) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>,
    fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>,
}
export default function SearchView({ products, isSearching, error, hasPreviousPage, isFetchingNextPage, isFetchingPreviousPage, hasNextPage, fetchNextPage, fetchPreviousPage }: TProp) {
    const { userProfile } = useAuth()

    const productItems = useMemo(() => {
        return products.length ?
            products.map((product: IProduct) => <Product {...product} />) :
            <p>No result found.</p>
    }, [products, userProfile])

    return (
        <article className={'absolute w-full inset-0 bg-white space-y-5'}>
            <div className={'grid grid-cols-[repeat(auto-fit,_minmax(25em,_1fr))] gap-x-10 items-center justify-center justify-items-center grid-rows-subgrid space-y-10 w-full'}>
                {isSearching ? <AiOutlineLoading className={'animate-spin sticky top-40.5 place-self-start justify-self-center'} /> :
                    error ? <p className={'place-self-center'}>Searching Failed.</p> :
                        productItems}
            </div>
            {!isSearching && (products.length > 8) &&
                <menu className='flex w-fit mx-auto text-white text-xs'>
                    <button type='button' title={'Go back previous products'} aria-label='Go back previous products'
                        disabled={!hasPreviousPage || isFetchingPreviousPage || isFetchingNextPage}
                        onClick={() => fetchPreviousPage()}
                        className='bg-c1 p-4 hover:bg-opacity-90 cursor-pointer disabled:pointer-events-none disabled:bg-opacity-80'>
                        {isFetchingPreviousPage ? <AiOutlineLoading3Quarters className='animate-spin' /> :
                            hasPreviousPage ? <GoChevronLeft /> : <GoChevronLeft />
                        }
                    </button>
                    <button type='button' title={'Load more bikes products'} aria-label='Load more bikes products lists'
                        disabled={!hasNextPage || isFetchingNextPage || isFetchingPreviousPage}
                        onClick={() => fetchNextPage()}
                        className='bg-c1 px-8 py-4 hover:bg-opacity-90 cursor-pointer disabled:pointer-events-none disabled:bg-opacity-80'>
                        {isFetchingNextPage ? <p className={'flex items-center gap-2'}><ImSpinner2 className='animate-spin' /> Loading More</p> :
                            hasNextPage ? 'Load More' : 'Nothing to load more.'
                        }
                    </button>
                </menu>
            }
        </article>
    )
}
