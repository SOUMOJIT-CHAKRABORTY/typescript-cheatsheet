import { createContext } from "react";

const initialState = {
  first: "Soumojit",
  last: "Chakraborty",
};

const context = createContext<typeof initialState>(initialState);
export default context;
