import React from "react";
import { useState, createContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    Login: false,
  });
  const updateLogin = () => {
    setUser((prevState) => {
      return { ...prevState, Login: true };
    });
  };
  return (
    <AuthContext.Provider value={{ user, updateLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
