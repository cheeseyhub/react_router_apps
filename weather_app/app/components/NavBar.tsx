import { Link } from "react-router";
export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list flex flex-row  justify-around">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
