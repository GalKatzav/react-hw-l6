import { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function ContextProvider({ children }) {
  const [userName, setUserName] = useState("");

  const globalVal = {
    userName,
    setUserName,
  };

  return (
    <AppContext.Provider value={globalVal}>{children}</AppContext.Provider>
  );
}
