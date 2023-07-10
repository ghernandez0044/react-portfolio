import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../../hooks/useMediaQuery"

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase()
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? 'text-tiffany-blue' : ''} hover:text-tiffany-blue transition duration-500`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>{page}</AnchorLink>
    )
}

function Navigation({ selectedPage, setSelectedPage }){
    // Create state variables
    const [ isMenuToggled, setIsMenuToggled ] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

    return (
        <nav className={`border-2 border-lime-600 z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-subheading text-3xl font-bold">GH</h4>

            {/* DESKTOP NAVIGATION */}
            {isAboveSmallScreens ? (
                <div className="flex justify-between gap-16 font-subheading text-sm font-semibold">
                    <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Resume' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            ) : (
                <button className="rounded-full bg-pale-purple p-2 h-10 w-10" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <i className="fa-solid fa-bars" />
                </button>
            )}
            </div>
        </nav>
    )
}

export default Navigation