import { useState } from "react";
import UserContext from "./srote";

function UseContextComponent() {
  const [name, setName] = useState({
    first: "Soumojit",
    last: "Chakraborty",
  });

  return (
    <div>
      <h2>First : {name.first}</h2>
      <h2>Last : {name.last}</h2>
      <button
        onClick={() =>
          setName({
            first: "Boto",
            last: "Bot",
          })
        }
      >
        change name
      </button>
    </div>
  );
}

export default UseContextComponent;
