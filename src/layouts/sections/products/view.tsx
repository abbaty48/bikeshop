import { AiOutlineLoading, AiOutlineLoading3Quarters } from 'react-icons/ai'
import FragmentLink from '@components/fragmentLink/fragmentLink'
import { useProductAPI } from '@hooks/api/useProductAPI'
import SearchFold from '@components/searchFold'
import { GoChevronLeft } from 'react-icons/go'
import { ImSpinner2 } from 'react-icons/im'
import { useSearchView } from './useView'
import { useAuth } from '@hooks/useAuth'
import { IProduct } from '@backend/types'
import SearchView from './searchView'
import { useMemo } from 'react'
import Product from './product'

type TProp = {
    kind: 'bikes' | 'accessories',
    header?: string
}
export default function View({ kind, header }: TProp) {
    const { isView, isSearching, payload, search, abortSearch } = useSearchView(kind === 'bikes' ? 'bike' : 'accessory')
    const { data, status, error, hasNextPage, hasPreviousPage, isFetchingNextPage, isFetchingPreviousPage, fetchNextPage, fetchPreviousPage } = useProductAPI([kind], kind)
    const { userProfile } = useAuth()

    const productItems = useMemo(() => {
        const products = data?.pages[data?.pageParams.length - 1]
        return (products?.length > 0) && products.map((product: IProduct) => <Product {...product} />)
    }, [data, userProfile])

    return (<section className="container relative py-10 space-y-5" aria-labelledby="h4-products">
        <div className={'text-c1 text-2xl text-center md:w-10/12 mx-auto md:text-[6rem] font-oldStandardTT space-y-10'}>
            <h4 id={'h4-products'}>{header}</h4>
            <p className={'text-[1.8rem] font-light text-c3 text-center md:w-3/4 mx-auto'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul className={'flex items-center justify-center space-x-2 md:space-x-5 text-center uppercase list-none'}>
                <li><FragmentLink to="#products" params={{ type: 'bikes' }} className={`text-xs hover:text-orange-500 transition-colors font-extrabold ${kind === "bikes" ? 'underline underline-offset-8 text-[#bd5400] rounded-full px-5 py-3 bg-gray-50' : ''}`} >Bikes</FragmentLink></li>
                <li><FragmentLink to="#products" params={{ type: 'accessories' }} className={`text-xs hover:text-orange-500 transition-colors font-extrabold ${kind === "accessories" ? 'underline underline-offset-8 text-[#bd5400] rounded-full px-5 py-3 bg-gray-50' : ''}`}>Accessories</FragmentLink></li>
            </ul>
        </div>
        {/*  */}
        {status === 'success' && <SearchFold placeHolder={`Search for ${kind}.`} label={'Search for a ${kind}.'} onSubmit={search} loading={isSearching} onAbort={abortSearch} />}
        {/*  */}
        <article className={'relative space-y-10'}>
            {isView && <SearchView products={payload} isSearching={isSearching} fetchNextPage={fetchNextPage} fetchPreviousPage={fetchPreviousPage} isFetchingPreviousPage={isFetchingPreviousPage} isFetchingNextPage={isFetchingNextPage} />}
            {/*  */}
            <div className={'grid grid-cols-[repeat(auto-fit,_minmax(25em,_1fr))] gap-x-10 items-center justify-center grid-rows-subgrid space-y-10 w-full'}>
                {status === 'pending' ? <AiOutlineLoading className={'animate-spin place-self-center justify-self-center'} /> :
                    status === 'error' ? <p className={'place-self-center'}>Server Error</p> :
                        productItems}
            </div>
            {/*  */}
            {status === 'success' &&
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
    </section>)
}
