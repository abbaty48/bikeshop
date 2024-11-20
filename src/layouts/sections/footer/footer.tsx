import { TbHomeUp } from "react-icons/tb";
import FragmentLink from "@components/fragmentLink/fragmentLink";

export default function Footer() {
    return (
        <footer className={`min-h-screen bg-[#eee] bg-[url('/src/assets/images/IMG_POSTER.avif')] bg-center bg-no-repeat bg-cover`}>
            <section aria-label="Subscribe" className="container grid grid-rows-[1fr_auto] pt-40 gap-y-20 divider divide-y divide-gray-300 h-full">
                <article className="flex flex-col items-center justify-center bg-white p-3 pb-2 pt-5 md:p-15 text-center space-y-10">
                    <h4 id={'h5-footer'} className="font-oldStandardTT text-3xl md:text-[6rem] font-normal md:leading-[6rem]">Subscribe to our newsletter</h4>
                    <p className="text-[1.8em] font-light text-left md:text-center text-c3 leading-[2.8rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation.</p>
                    <form aria-labelledby="h5-footer" className="flex flex-wrap flex-col md:flex-row md:justify-center w-full md:w-9/12 mx-auto text-xs md:text-[1.8em]">
                        <input type="email" name="subscriber" required className="flex-1 bg-c5 px-4 py-5 outline-none border-none" placeholder="Your email address..." />
                        <input type="submit" value="Subscribe" className="bg-c1 text-white text-center px-10 py-5  cursor-pointer w-auto hover:bg-80" />
                    </form>
                </article>
                <div className="flex flex-wrap justify-between items-center py-4">
                    <nav aria-label="Navigate through site sections" className="flex gap-4 items-center text-white text-2xl">
                        <a href="/" aria-label="Scroll to the top." aria-current="page"
                            className="hover:text-white transition-colors"><TbHomeUp stroke="rgb(251 146 60)" /></a>
                        <FragmentLink to="#products" params={{ type: 'bikes' }} aria-label="View our bikes products" aria-current="page" className="hover:text-orange-400 transition-colors">Bikes</FragmentLink>
                        <FragmentLink to="#products" params={{ type: 'accessories' }} aria-label="View accessories" aria-current="page" className="hover:text-orange-400 transition-colors">Accessories</FragmentLink>
                    </nav>
                </div>
            </section>
        </footer>
    )
}
