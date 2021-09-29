import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../FPT_Telecom_logo.svg";

function SideBar() {
  return (
    <aside className="side-bar">
      <div className="top">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <span className="name">SCC DashBoard</span>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <NavLink to="/ticket" className="link">
              Ticket
            </NavLink>
          </li>
          <li>
            <NavLink to="/cm" className="link">
              CM
            </NavLink>
          </li>
          <li>
            <NavLink to="/am" className="link">
              EM
            </NavLink>
          </li>
          <li>
            <NavLink to="/designer" className="link">
              Designer
            </NavLink>
          </li>
          <li>
            <NavLink to="/rf" className="link">
              RF
            </NavLink>
          </li>
          <li>
            <NavLink to="/km" className="link">
              KM
            </NavLink>
          </li>
          <li>
            <NavLink to="/okr" className="link">
              OKR
            </NavLink>
          </li>
          <li>
            <NavLink to="/report" className="link">
              Report
            </NavLink>
          </li>
          <li>
            <NavLink to="/incident" className="link">
              Incident Forecast
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
