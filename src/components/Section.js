import { NavLink } from "react-router-dom";

function Section({ title, items }) {
  return (
    <section>
      <header className="flex items-stretch justify-between mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
      </header>
      <div className="grid grid-cols-4 gap-x-6 justify-between">
        {items.map((item) => (
          <NavLink key={item.id} to="/" className={"bg-footer p-4 rounded text-center"}>
            {item.title}
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Section;
