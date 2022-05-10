import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wishlistReducer } from "../reducer/wishlistReducer";
import { useAuth } from "../context/auth-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();

  const initialWishlistState = { wishlist: [], wishlistCount: 0 };
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const userToken = localStorage.getItem("userToken");

  const getWishlist = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: userToken,
        },
      });
      if (response.status === 200) {
        wishlistDispatch({
          type: "GET_WISHLIST",
          payload: response.data.wishlist,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, [loggedIn]);

  const addToWishlist = async (product) => {
    if (loggedIn) {
      if (wishlistState.wishlist.some((item) => item._id === product._id)) {
        console.log("Product already exists");
      } else {
        try {
          const response = await axios.post(
            "/api/user/wishlist",
            { product },
            {
              headers: {
                authorization: userToken,
              },
            }
          );
          if (response.status === 201) {
            wishlistDispatch({
              type: "ADD_TO_WISHLIST",
              payload: response.data.wishlist,
            });
            console.log("Product added to wishlist");
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      console.log("Please login to continue");
      navigate("/login");
    }
  };
  const removeFromWishlist = async (product) => {
    if (loggedIn) {
      try {
        const response = await axios.delete(
          `/api/user/wishlist/${product._id}`,
          {
            headers: {
              authorization: userToken,
            },
          }
        );
        if (response.status === 200) {
          wishlistDispatch({
            type: "DELETE_FROM_WISHLIST",
            payload: response.data.wishlist,
          });
          console.log("Product removed from wishlist");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please login to continue");
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: wishlistState.wishlist,
        wishlistCount: wishlistState.wishlistCount,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
