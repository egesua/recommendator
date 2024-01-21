import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "views/Home"
import Search from "views/Search"
import Collections from "views/Collections"

function Content() {
    return(
        <main className="flex-auto">
            <Navbar />
            <div className="px-6 pt-2">
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/search" element = {<Search />} />
                <Route path="/collections" element = { <Collections /> } />
            </Routes>
            </div>
            Content
        </main>
    )
}

export default Content