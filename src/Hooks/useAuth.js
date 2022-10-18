import { useContext } from "react";
import AuthContext from "../Context/AuthProvider";

const useAuth = () => {
  const handleContext = () => {
    return useContext(AuthContext);
  };
  return { handleContext };
};

export default useAuth;
