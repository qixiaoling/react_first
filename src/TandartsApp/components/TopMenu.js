import React from 'react';
import {NavLink} from "react-router-dom";

import HomePage from '../pages/Home';
import CavitiesPage from '../pages/Cavities';
import AppointmentsPage from '../pages/Appointments';
import WhiteningPage from '../pages/Whitening';
function TopMenu() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
          </li>

          <li>
            <NavLink to="/gaatjes" exact activeClassName="active-link">Gaatjes</NavLink>
          </li>

          <li>
            <NavLink to="/afspraak-maken" exact activeClassName="active-link">Afspraak maken</NavLink>
          </li>

          <li>
            <NavLink to="/tanden-bleken" exact activeClassName="active-link">Tanden bleken</NavLink> bleken
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default TopMenu;