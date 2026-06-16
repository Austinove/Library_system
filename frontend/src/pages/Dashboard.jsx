import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-3 gap-10">
        <NavLink to="/books">
          <div className="p-4 border rounded">
            <h3 className="font-bold">Bücher</h3>
            <p>Alle Bücher verwalten</p>
          </div>
        </NavLink>

        <NavLink to="/shelves">
          <div className="p-4 border rounded">
            <h3 className="font-bold">Regale</h3>
            <p>Regale organisieren</p>
          </div>
        </NavLink>
        <NavLink to="/borrowing">
          <div className="p-4 border rounded">
            <h3 className="font-bold">Ausleihen</h3>
            <p>Ausleihen verwalten</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
