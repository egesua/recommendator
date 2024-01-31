import { NavLink } from "react-router-dom";

function Section({ title, items, children }) {
  return (
    <section className="">
      <header className="flex items-stretch justify-center mb-4">
        <h3 className="text-2xl text-white font-semibold tracking-tight">
          {title}
        </h3>
      </header>
      {children ? (
        <div>{children}</div>
      ) : (
        <div className="grid grid-cols-4 gap-x-6 justify-between">
          {items.map((item) => (
            <NavLink
              key={item.id}
              to="/"
              className={
                "bg-footer p-4 rounded hover:bg-activeColor group-[]: text-center"
              }
            >
              <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {item.title}
              </h6>
            </NavLink>
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;
