import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "views/Home"
import Search from "views/Search"

function Content() {
    return(
        <main className="flex-auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>
            Content
        </main>
    )
}

export default Content