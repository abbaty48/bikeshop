import { useEffect, useState } from "react"

export default function Alert() {
    const [firsttime, setFirsttime] = useState(false)
    useEffect(() => {
        if (sessionStorage.getItem('welcomeonboard') === null) {
            setFirsttime(true);
        } else {
            setFirsttime(false)
        }
    }, [firsttime])

    const set = () => {
        setFirsttime(false)
        sessionStorage.setItem('welcomeonboard', 'bikeshop')
    }
    return firsttime && (
        <div className="alert">
            <div className="alert-inner-1">
                <button type="button" className="alert-close-btn" onClick={set}>&times;</button>
                <div>
                    <h1>Attention Please !!!</h1>
                    <h2 className="note">This project is a mock up - a sample of my work done as a software engineering to showcase my experience, i downloaded the mockup some where else on the internet, implement them using my web development experience, please learn more about me, on my linkedIn, and X.</h2>
                    <p>Hello dear, my name is <em> Yusuf Abdulrahman a.k.a Abbatyya/Abbaty Abdul</em>, I'm a software engineering by profession, a problem solver, a thinker, and expert on IT industry.
                        please learn more about me </p>
                    <ul className="social-links">
                        <li><a href="https://www.github.com/abbaty48" target="_blank">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/abbaty-abdul-93869bab/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://www.x.com/abbaty48" target="_blank">X - twitter</a></li>
                        <li><a href="https://www.upwork.com/o/profiles/users/~01484d90f85bd4131a/" target="_blank">Upwork</a></li>
                    </ul>
                    <p className="warning">The project idea was originally taking from a psd mockup downloaded from somewhere on the internet, please check out the project repo on github for the mockup file('s) and the source code. <a href="https://github.com/abbaty48/bikeshop" target="_blank">Bikeshop</a></p>
                </div>
            </div>
        </div>
    )
}
