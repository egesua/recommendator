import home from "img/home.png";
import searchIcon from "img/searchIcon.png";
import libraryIcon from "img/libraryIcon.png";

function Menu() {
  return (
    <nav className="px-4">
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold gap-x-4  text-white rounded  hover:text-white px-4 bg-activeColor"
          >
            <span className="pr-2">
              <img src={home} alt="home" width={24} height={24}/>
            </span>
            Main Menu
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold gap-x-4  text-link rounded  hover:text-white px-4 "
          >
            <span className="pr-2">
              <img src={ searchIcon } alt="search" width={24} height={24} />
            </span>
            Search
          </a>
        </li>
        <li>
          <a
            href="#"
            className="h-10 flex items-center text-sm font-semibold gap-x-4  text-link rounded  hover:text-white px-4"
          >
            <span className="pr-2">
                <img src= { libraryIcon } alt="library" width={ 24 } height={ 24 } />
            </span>
            Library
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
