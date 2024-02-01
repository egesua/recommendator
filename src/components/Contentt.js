import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "views/Home"
import Collections from "views/Collections"

function Content() {
    return(
        <main className="flex-auto overflow-auto">
            <Navbar />
            <div className="px-6 pt-2">
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/collections" element = { <Collections /> } />
            </Routes>
            </div>
            Content here...
        </main>
    )
}

export default Content