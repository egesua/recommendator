import { Icon } from "Icons";
import { NavLink } from "react-router-dom";

function Seeeeections({ title, items }) {
  return (
    <section className="">
      <header className="flex items-stretch justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
      </header>
      <div className="grid grid-cols-4 gap-x-6 justify-between">
        {items.map((item) => (
          <NavLink key={item.id} to="/" className={"bg-footer p-4 rounded hover:bg-activeColor group-[]: text-center"}>
            <div className="pt-[100%] relative">
                <img src={item.image} className="absolute inset-0 object-cover w-full h-full" />
                <button className="w-10 h-10 rounded-full bg-primary absolute group-hover:block group-focus:flex bottom-2 right items-center justify-center">
                    <Icon name="play" size={16} />
                </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {item.title}
            </h6>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Seeeeections
