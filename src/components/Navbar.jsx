import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🎆 NewYear 2026</Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/events">Events</NavLink>
            <NavLink className="nav-link" to="/countdown">Countdown</NavLink>
            <NavLink className="nav-link" to="/wishes">Wishes</NavLink>
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}