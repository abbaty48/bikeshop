import FragmentLink from '@components/fragmentLink/fragmentLink'
import { BsPlayFill, BsStopBtnFill } from 'react-icons/bs'
import { CiLogin, CiLogout } from 'react-icons/ci'
import logo from '@assets/logo.webp'
import { useHero } from './useHero'
import { useRef } from 'react'

export default function Hero() {
    const video = useRef<HTMLVideoElement>(null)
    const { isAuth, isPlayed, onVideo, playAt, toggleVideoOn, handleSession } = useHero({ video })

    return (
        <>
            <header className='relative md:min-h-screen h-[70vmin] bg-c1 py-3 md:py-8' aria-labelledby='h1'>
                <video ref={video} className={`absolute inset-0 w-screen h-full object-cover bg-c1 bg-[url('/src/assets/images/IMG_POSTER.avif')] bg-cover bg-no-repeat bg-blend-multiply brightness-50`} preload='none'>
                    <source src={'https://videos.pexels.com/video-files/5790079/5790079-hd_1920_1080_30fps.mp4'} />
                    <source src={'https://videos.pexels.com/video-files/5789979/5789979-hd_1920_1080_30fps.mp4'} />
                </video>
                <article className='container relative z-[2] h-full'>
                    <nav className={'flex items-center justify-between'}>
                        <a href='/' aria-label='Bikeshop.com' aria-current="page">
                            <img src={logo} alt={'Bikeshop.com'} width={150} aria-hidden className={'w-19.5 md:w-auto'}  height={20} />
                        </a>
                        <ul className={'flex items-center justify-between space-x-3 md:gap-10 md:space-x-10 text-[1.3rem] text-center uppercase text-white list-none'}>
                            <li><FragmentLink to="#products" params={{ type: 'bikes' }} className={'md:text-2xl hover:text-orange-500 transition-colors'} >Bikes</FragmentLink></li>
                            <li><FragmentLink to="#products" params={{ type: 'accessories' }} className={'md:text-2xl hover:text-orange-500 transition-colors'}>Accessories</FragmentLink></li>
                            <li><a onClick={handleSession} className={'grid items-center p-1 md:p-3 bg-white rounded-full ring-2 md:ring-8 ring-c3 cursor-pointer hover:brightness-75'} aria-label={isAuth ? 'Logout' : 'Login'} role='button'>{isAuth ? <CiLogout style={{ fill: 'orange' }} /> : <CiLogin style={{ fill: 'orange' }} />}</a></li>
                        </ul>
                    </nav>
                    <section className={'absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-/12 flex flex-col items-center justify-center gap-3'} aria-labelledby='h1'>
                        <h1 id={'h1'} className={'text-center text-[1.5rem] md:text-5xl font text-white w-full font-oldStandardTT'}>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                        {
                            <button type='button' onClick={toggleVideoOn} className={'bg-white/80 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-all animate-pulse hover:scale-75'} aria-label='Play/Stop advert video'>{onVideo ? <BsStopBtnFill fill='#0005' /> :
                                <BsPlayFill fill='#0005' />}
                            </button>
                        }
                    </section>
                    {
                        isPlayed && (
                            <menu className={'inline-flex gap-2 items-center justify-between absolute left-1/2 bottom-[0.2rem] -translate-x-1/2 px-4 py-2 rounded-full'}>
                                <button type="button" className='w-3 h-3 bg-black/45 rounded-full transition-all hover:ring-1 hover:ring-white/25 hover:scale-110 hover:rounded-none ' onClick={() => playAt(0)}></button>
                                <button type="button" className='w-3 h-3 bg-black/45 rounded-full transition-all hover:ring-1 hover:ring-white/25 hover:scale-110  hover:rounded-none ' onClick={() => playAt(1)}></button>
                                <button type="button" className='w-3 h-3 bg-black/45 rounded-full transition-all hover:ring-1 hover:ring-white/25 hover:scale-110 hover:rounded-none ' onClick={() => playAt(2)}></button>
                            </menu>
                        )
                    }
                </article>
            </header >
        </>
    )
}
