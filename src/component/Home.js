import { useReducer, useState, useEffect } from "react";
import Nave from "./Navigationpath";

const innit = 0;
function reducer(state, action) {
  switch (action.type) {
    case "ranjith":
      return state + 1;

    default:
      throw new Error("hi helllow");
  }
}
export default function Home() {
  const [value, setvalue] = useReducer(reducer, innit);
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h1>HI Welcome</h1>
      <Nave />
      <button onClick={() => setvalue({ type: "ranjith" })}>click</button>
      <p>{value}</p>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times{" "}
      </button>
    </div>
  );
}
