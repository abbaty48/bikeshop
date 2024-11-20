import bikeOnStreet from '@assets/images/IMG_BIKE_ONSTREET.avif'
import { useInView, animated, easings } from '@react-spring/web'
import DisplayShow from '@components/displayShow';

export default function Features() {
    const [imgRef, imgSprings] = useInView(() => ({ from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 }, config: { duration: 1500, easings: easings.easeInSine } }), { once: true });
    const [sectionRef, intersected] = useInView();

    return (
        <article className={'py-10 md:py-20'}>
            <section className={'grid md:grid-cols-2 container my-5'} aria-labelledby="h2-features">
                <article className={'my-5 space-y-4'}>
                    <h2 id={'h2-features'} className={'font-oldStandardTT text-3xl md:text-[6rem] leading-snug'}>Lorem ipsum dolor sit amet consectetur!</h2>
                    <p className={'text-[1.8rem] font-light leading-[2.8rem] space-y-5 font-ubuntu text-c3 text-justify'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.aliquip ex ea commodo consequat.
                        <br />
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br />
                        <br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <a href="#" className={'inline-block w-auto bg-c1 py-4 px-10 text-c2 text-center uppercase text-[1.8rem] leading-[3.2rem] cursor-pointer hover:bg-opacity-90'} aria-label='Read more about us.'>Read More</a>
                </article>
                <animated.img ref={imgRef} src={bikeOnStreet} alt={'bike on street beside the wall.'} aria-hidden width={620} height={757} loading='lazy' className='sticky top-1 object-cover w-full hidden md:block'
                    style={imgSprings} />
            </section>
            <section ref={sectionRef} className={'container mt-20 h-screen flex items-center justify-center'}>
                {intersected && (<DisplayShow />)}
            </section>
        </article>
    )
}
