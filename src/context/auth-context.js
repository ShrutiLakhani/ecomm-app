import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cart-context";
import { useWishlist } from "./wishlist-context";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    if (userToken) {
      setLoggedIn(true);
    }
  }, [userToken]);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
