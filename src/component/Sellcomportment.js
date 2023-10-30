import { Outlet } from "react-router-dom";
import ChildNave from "./ChildNave";
export default function Sellcomportment() {
  return (
    <div>
      <h1>hi</h1>
      <ChildNave />
      <Outlet />
    </div>
  );
}
