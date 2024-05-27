import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Context";
import { LuWaves } from "react-icons/lu";

export default function Header() {
  const { userName } = useContext(AppContext);

  return (
    <header className="container-fluid bg-warning">
      <div className="container p-2">
        <div className="row align-items-center">
          <div className="logo col-auto">
            <h2>
              <LuWaves style={{ fontSize: "46px", color: "green" }} />{" "}
              {userName && `- Welcome, ${userName}`}
            </h2>
          </div>
          <nav className="col-auto">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
