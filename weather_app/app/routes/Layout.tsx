import { Link, Outlet } from "react-router";
import NavBar from "~/components/NavBar";

export default function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
