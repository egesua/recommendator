import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "views/Home"
import Collections from "views/Collections"

function Content() {
    return(
        <main className="flex-auto overflow-auto space-y-6">
            <Navbar />
            <div className="px-6 pt-2 space-y-6">
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/collections" element = { <Collections /> } />
            </Routes>
            </div>
        </main>
    )
}

export default Content