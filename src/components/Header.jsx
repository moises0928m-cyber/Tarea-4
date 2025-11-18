import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="h-10 text-xl">
        <nav className="flex flex-row justify-evenly ">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/details">Details</Link>
          <Link to="/features">Features</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
}
