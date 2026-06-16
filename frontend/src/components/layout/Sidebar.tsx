import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }: any) =>
    `block px-4 py-2 rounded ${
      isActive ? "bg-[#662917] text-white" : "text-black"
    }`;

  return (
    <div className="w-56 border-r p-4 space-y-2">
      <NavLink to="/" end className={linkClass}>
        Dashboard
      </NavLink>

      <NavLink to="/books" className={linkClass}>
        Bücher
      </NavLink>

      <NavLink to="/shelves" className={linkClass}>
        Regale
      </NavLink>

      <NavLink to="/borrowing" className={linkClass}>
        Ausleihen
      </NavLink>
    </div>
  );
}
