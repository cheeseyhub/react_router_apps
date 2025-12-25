import { Link } from "react-router";
export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list flex flex-wrap flex-col justify-evenly  h-dvh w-1/3  bg-amber-300 text-black text-2xl">
        <li className="navbar-item ">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/forecast">ForeCast</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
