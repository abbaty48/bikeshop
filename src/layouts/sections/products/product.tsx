import { TbShoppingCartPlus, TbShoppingCartMinus } from 'react-icons/tb'
import { Popover, ArrowContainer } from 'react-tiny-popover'
import { useSessionAPI } from '@hooks/api/useSessionAPI'
import { useCartAPI } from '@hooks/api/useCartAPI'
import { AiOutlineLoading } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import { IProduct } from '@backend/types'
import { useAuth } from '@hooks/useAuth'
import { FcGoogle } from 'react-icons/fc'
import Card from '@components/card'

export default function Product({ id, name, price, description }: IProduct) {
    const { inCart, toggleCart, isProcessing } = useCartAPI()
    const { setSession } = useSessionAPI()
    const [isInCart] = useState(() => inCart(id))
    const [is401, setIs401] = useState(false)
    const { userProfile } = useAuth()

    const handleCart = useCallback(() => {
        if (!userProfile) { return void setIs401(true) }
        toggleCart(id, isInCart ? 'remove' : 'add')
    }, [userProfile])

    const handleLogin = useCallback(() => { setIs401(false); setSession() }, [])
    const cancelLogin = useCallback(() => setIs401(false), [])

    return (
        <Card key={id} className={'grid grid-rows-subgrid row-span-4 space-y-5 text-center min-w-[250px]'}>
            <Card.CardBody className={'grid grid-rows-subgrid row-span-3 items-center justify-center space-y-5'}>
                <Card.CardFeature src={`https://fakeimg.pl/250x250/efefef/909090?text=${name}&font=museo.webp`} alt={description} width={250} height={250} className='object-cover w-full h-full rounded-2xl bg-c2 place-self-center' loading='lazy' />
                <figcaption className={'grid grid-rows-subgrid row-span-2 space-y-4 text-[2.2rem]'}>
                    <p className={'font-oldStandardTT font-bold'}>{name}</p>
                    <p className={'font-medium text-c3'}>{price}$</p>
                </figcaption>
            </Card.CardBody>
            <Card.CardFooter className={'flex justify-start items-center gap-2 text-2xl'}>
                {isProcessing ? <AiOutlineLoading className={'animate-spin'} /> :
                    <Popover isOpen={is401} positions={['top']} onClickOutside={cancelLogin} content={({ position, childRect, popoverRect }) => (<ArrowContainer
                        arrowSize={10}
                        position={position}
                        childRect={childRect}
                        arrowColor={'#6a6a6a'}
                        popoverRect={popoverRect}
                        arrowStyle={{ opacity: 0.7 }}
                        arrowClassName='popover-arrow'
                        className='popover-arrow-container'
                    >
                        <div className={'bg-white shadow-md rounded-xl px-3 py-5 space-y-4 text-sm font-oldStandardTT'}>
                            <p>You're not login, please login first and try again.</p>
                            <menu className={'flex gap-2 items-center'}>
                                <button onClick={handleLogin} className='flex items-center gap-1 border px-4 py-2 text-center cursor-pointer hover:bg-c1 hover:text-c2'> <FcGoogle /> Sign me in.</button>
                                <button onClick={cancelLogin} className='px-4 py-2 text-center cursor-pointer hover:bg-c1 hover:text-c2'>Nop, thanks</button>
                            </menu>
                        </div>
                    </ArrowContainer>
                    )
                    }>
                        <button type="button" title={isInCart ? "Remove from cart" : 'Add To Cart'}
                            aria-label={isInCart ? "Remove from cart" : 'Add To Cart'} onClick={handleCart}
                            className='hover:bg-c2 hover:rounded-full hover:p-2 hover:cursor-pointer transition-all hover:scale-80'>
                            {isInCart ? <TbShoppingCartMinus /> : <TbShoppingCartPlus />}
                        </button>
                    </Popover>
                }
                <button type="button" aria-label="Buy now" className={'bg-c1 flex-1 px-10 py-4 text-xs uppercase text-white hover:bg-opacity-85'}>Buy Now</button>
            </Card.CardFooter>
        </Card>
    )
}
