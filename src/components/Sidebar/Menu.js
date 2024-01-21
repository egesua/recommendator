import home from "img/home.png";
import searchIcon from "img/searchIcon.png";
import libraryIcon from "img/libraryIcon.png";

import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="px-4">
      <ul className="flex flex-col">
        <li>
          <nav id="home">
          <NavLink to={"/"} end
            className="h-10 flex items-center text-sm font-semibold gap-x-4  text-white rounded  hover:text-white px-4"
          >
            <span className="pr-2">
              <img src={home} alt="home" width={24} height={24}/>
            </span>
            Main Menu
          </NavLink>
          </nav>
        </li>
        <li>
        <nav id="search">
          <NavLink to={"/search"} end
            className="h-10 flex items-center text-sm font-semibold gap-x-4  text-link rounded  hover:text-white px-4 "
            
          >
            <span className="pr-2">
              <img src={ searchIcon } alt="search" width={24} height={24} />
            </span>
            Search
          </NavLink>
          </nav>
        </li>
        <li>
        <nav id="collections">
          <NavLink to={"/collections"} end
            className="h-10 flex items-center text-sm font-semibold gap-x-4  text-link rounded  hover:text-white px-4"
          >
            <span className="pr-2">
                <img src= { libraryIcon } alt="library" width={ 24 } height={ 24 } />
            </span>
            Library
          </NavLink>
          </nav>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
