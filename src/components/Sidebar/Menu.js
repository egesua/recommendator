function Menu() {
    return (
        <nav className="px-4">
            <ul className="flex flex-col">
                <li>
                    <a href="#" className="h-10 flex items-center text-sm font-semibold text-link hover:text-white">
                        Main Menu
                    </a>
                </li>
                <li>
                    <a href="#" className="h-10 flex items-center text-sm font-semibold text-link hover:text-white">
                        Search
                    </a>
                </li>
                <li>
                    <a href="#" className="h-10 flex items-center text-sm font-semibold text-link hover:text-white">
                        Library
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu