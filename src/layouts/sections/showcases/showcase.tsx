import THUMB1 from '@assets/images/IMG_BIKE02_THUMB1.avif'
import THUMB2 from '@assets/images/IMG_BIKE02_THUMB2.avif'
import THUMB3 from '@assets/images/IMG_BIKE02_THUMB3.avif'
import ImageMagnifier from '@components/imageZoom/zoom'
import IMG2 from '@assets/images/IMG_BIKE02.avif'
import { useInView } from '@react-spring/web'

export default function Showcase() {
    const [sectionRef, isIntersected] = useInView()

    return (
        <section className={'py-20 space-y-20'} aria-labelledby="h3-showcase">
            <div className={'container space-y-10'} aria-labelledby='h3-showcase'>
                <h3 id={'h3-showcase'} className={'text-c1 text-2xl text-center md:w-10/12 mx-auto md:text-[6rem] md:leading-[6rem] font-oldStandardTT'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p className={'text-[1.8rem] font-light text-c3 text-center md:w-3/4 mx-auto font-oldStandardTT'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                    aliquip ex ea commodo consequat.</p>
            </div>
            <section ref={sectionRef} aria-hidden></section>
            {
                isIntersected && (
                    <ImageMagnifier maxInDepthZoomScale={0.5}
                        srcSet={{ base: IMG2, thumbnail_1: THUMB1, thumbnail_2: THUMB2, thumbnail_3: THUMB3 }} />
                )
            }
        </section>
    )
}
