import logo from "img/logo.png"
import Menu from "./Menu"

function Sidebar() {
    return(
        <aside className="w-60 py-4 flex flex-col">
            <a href="#" className="mb-5 px-6">
                <img src={logo} alt="music" className="h-10 pl-8" />
            </a>
            

                <Menu />

        </aside>
    )
}

export default Sidebar