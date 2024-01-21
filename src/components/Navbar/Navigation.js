import { Icon } from "Icons";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const nav = useNavigate();

  const handleNav = (step) => {
    nav(step);
  };

  return (
    <nav className="flex items-center gap-x-2">
      <button
        onClick={() => handleNav(-1)}
        className="w-8 h-8 flex items-center justify-center rounded-full"
      >
        <Icon size={22} name="prev" />
      </button>
      <button
        onClick={() => handleNav(1)}
        className="w-8 h-8 flex items-center justify-center rounded-full"
      >
        <Icon size={22} name="next" />
      </button>
    </nav>
  );
}

export default Navigation;