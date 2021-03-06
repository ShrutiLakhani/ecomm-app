import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../reducer/cartReducer";
import { useAuth } from "../context/auth-context";
import Toast from "../Components/Toast";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();

  const initialCartState = {
    cart: [],
    cartCount: 0,
    cartTotalPrice: 0,
    cartTotalDiscount: 0,
    cartFinalAmount: 0,
  };

  const userToken = localStorage.getItem("userToken");

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const getCart = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: userToken,
        },
      });
      if (response.status === 200 || response.status === 201) {
        cartDispatch({ type: "GET_CART", payload: response.data.cart });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, [loggedIn]);

  const addToCart = async (product) => {
    if (loggedIn) {
      if (cartState.cart.some((item) => item._id === product._id)) {
        incrementCart(product);
      } else {
        try {
          const response = await axios.post(
            "/api/user/cart",
            { product },
            {
              headers: {
                authorization: userToken,
              },
            }
          );
          if (response.status === 201) {
            cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
            Toast({ type: "success", message: "Product added to Cart" });
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      Toast({ type: "error", message: "Please login to continue" });
      navigate("/login");
    }
  };

  const deleteFromCart = async (product) => {
    if (loggedIn) {
      try {
        const response = await axios.delete(`/api/user/cart/${product._id}`, {
          headers: {
            authorization: userToken,
          },
        });
        if (response.status === 200) {
          cartDispatch({
            type: "DELETE_FROM_CART",
            payload: response.data.cart,
          });
          Toast({ type: "success", message: "Product removed from Cart" });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Toast({ type: "error", message: "Please login to continue" });
    }
  };

  const incrementCart = async (product) => {
    if (loggedIn) {
      try {
        const response = await axios.post(
          `/api/user/cart/${product._id}`,
          {
            action: {
              type: "increment",
            },
          },
          {
            headers: {
              authorization: userToken,
            },
          }
        );
        if (response.status === 200) {
          cartDispatch({ type: "INCREMENT_CART", payload: response.data.cart });
          Toast({ type: "success", message: "Product added to Cart" });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Toast({ type: "error", message: "Please login to continue" });
    }
  };

  const decrementCart = async (product) => {
    if (loggedIn) {
      if (product.qty === 1) {
        deleteFromCart(product);
      } else {
        try {
          const response = await axios.post(
            `/api/user/cart/${product._id}`,
            {
              action: {
                type: "decrement",
              },
            },
            {
              headers: {
                authorization: userToken,
              },
            }
          );
          if (response.status === 200) {
            cartDispatch({
              type: "DECREMENT_CART",
              payload: response.data.cart,
            });
            Toast({ type: "success", message: "Product removed from Cart" });
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      Toast({ type: "error", message: "Please login to continue" });
    }
  };

  const checkOut = async () => {
    cartDispatch({ type: "CHECKOUT" });
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        cartCount: cartState.cartCount,
        cartTotalPrice: cartState.cartTotalPrice,
        cartTotalDiscount: cartState.cartTotalDiscount,
        cartFinalAmount: cartState.cartFinalAmount,
        addToCart,
        deleteFromCart,
        incrementCart,
        decrementCart,
        checkOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
