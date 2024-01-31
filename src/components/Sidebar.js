import logo from "img/logo.png"
import Menu from "./Sidebar/Menu"
import Playlists from "./Sidebar/Playlists"

function Sidebar() {
    return(
        <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
            <a href="#" className="mb-4 px-5">
                <img src={logo} alt="music" className="h-10 pl-14" />
            </a>

                <Menu />

            <Playlists />

        </aside>
    )
}

export default Sidebar