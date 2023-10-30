import { NavLink } from "react-router-dom";

export default function ChildNave() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="selling">Selling your product</NavLink>
        </li>
        <li>
          <NavLink to="buying">Buying some product</NavLink>
        </li>
      </ul>
    </div>
  );
}
