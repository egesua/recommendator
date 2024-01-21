import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"

function Navbar() {
    return(
        <nav className="h-16 px-8 flex items-center justify-between">
            <Navigation />
            <Auth />
        </nav>
    )
}

export default Navbar