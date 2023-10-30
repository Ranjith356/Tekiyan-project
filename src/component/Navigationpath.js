import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigationpath() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="minitv">miniTv</NavLink>
        </li>
        <li>
          <NavLink to="sell">sell</NavLink>
        </li>
        <li>
          <NavLink to="todaydeal">todaydeal</NavLink>
        </li>
      </ul>
    </div>
  );
}
