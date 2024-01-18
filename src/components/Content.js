import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "views/Home"
import Search from "views/Search"

function Content() {
    return(
        <main className="flex-auto">
            <Navbar />
            <Routes>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
            </Routes>
            Content
        </main>
    )
}

export default Content