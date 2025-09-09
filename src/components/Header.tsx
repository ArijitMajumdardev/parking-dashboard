import { Grid2x2, ReceiptText } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex gap-6 justify-between">
      <div>
        <h1 className="text-lg font-bold">Parking Lot Admin</h1>
      </div>
      <div className="w-50 flex justify-evenly">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded ${
              isActive ? "font-bold text-blue-600" : "text-gray-600"
            }`
          }
        >
          <Grid2x2 />
          Layout
        </NavLink>

        <NavLink
          to="/billing"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded ${
              isActive ? "font-bold text-blue-600" : "text-gray-600"
            }`
          }
        >
          <ReceiptText />
          Billing
        </NavLink>
      </div>
    </header>
  );
}
