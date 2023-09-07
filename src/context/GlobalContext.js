// create react context here

import React, { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();
export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return <GlobalContext.Provider value={{ user, setUser, loading, setLoading }}>{children}</GlobalContext.Provider>;
};
