import { useState } from "react";

function UseStateCompnent() {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setArr([...arr, arr.length + 1]);
          }}
        >
          Add Array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button
          onClick={() => {
            setName("Soumojit");
          }}
        >
          Add Name
        </button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

export default UseStateCompnent;
