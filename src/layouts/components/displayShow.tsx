import { useChain, useSpring, useSpringRef, animated, useTransition } from "@react-spring/web";
import { TPresentation, TPresentationPayloadCursor } from "@libs/types";
import { useCursor } from "@hooks/api/usePresentationAPI";
import { useCallback, useState, memo } from "react";

type TProps = {
    style: any,
    presentation?: TPresentation;
}

const Show = memo(function Show({ style, presentation }: TProps) {

    const imgSpringRef = useSpringRef()
    const imgSpring = useSpring({
        ref: imgSpringRef,
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 1 }
    })

    const descSpringRef = useSpringRef()
    const descSpring = useSpring({
        ref: descSpringRef,
        from: { x: 1000, opacity: 0 },
        to: { x: 0, opacity: 1 }
    })

    useChain([imgSpringRef, descSpringRef], [0, 0.4])

    return (
        <animated.div key={presentation?.id} style={style} className={'grid md:grid-cols-2 space-x-2 space-y-4'}>
            <animated.img alt={''} src={presentation?.feature} width={320} height={320} loading='lazy' className={'object-contain w-full'} style={imgSpring} />
            <animated.p  className={'h-max text-[1.8rem] leading-[2.8rem] font-light italic font-ubuntu relative md:border-l md:border-l-c2 pl-4 md:before:absolute md:before:content=[""] md:before:w-30 md:before:h-[0.009rem] md:before:bg-c2 md:before:-left-30 md:before:top-1/2 md:before:-translate-y-1/2'} style={descSpring}>{presentation?.description}</animated.p>
        </animated.div>
    )
})

export default function DisplayShow() {
    const { data, isLoading, fetchNextPage } = useCursor<TPresentationPayloadCursor>()
    const [index, set] = useState(0)
    const update = useCallback(() => {
        const i = index >= (data?.total ?? 1) ? 0 : index + 1;
        set(i)
    }, [index])

    const transitions = useTransition(index, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        delay: 1000,
        config: { duration: 3000 },
        onRest: async () => {
            if (index >= (data?.total ?? 1)) {
                set(0)
            } else {
                if (!isLoading) {
                    await fetchNextPage(index)
                    update()
                }
            }
        }
    })

    return isLoading ?
        <div className='grid place-items-center h-full w-full'><span className={'spin_l'}></span></div> :
        transitions(style => <Show style={style} presentation={data?.presentation} />)
}
