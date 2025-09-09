// components/Header.tsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex gap-6">
      <NavLink to="/" className={({ isActive }) => isActive ? "font-bold text-blue-600" : ""}>
        Layout
      </NavLink>
      <NavLink to="/billing" className={({ isActive }) => isActive ? "font-bold text-blue-600" : ""}>
        Billing
      </NavLink>
    </header>
  );
}
