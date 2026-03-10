import { Link } from "react-router-dom";
import "../css/Navbar.css";
import type { JSX } from "react";

function NavBar(): JSX.Element {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link" >Home</Link>
                <Link to="/favorites" className="nav-link" >Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar;

