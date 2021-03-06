export const cartReducer = (cartState, { type, payload }) => {
  const initialCartState = {
    cart: [],
    cartCount: 0,
    cartTotalPrice: 0,
    cartTotalDiscount: 0,
    cartFinalAmount: 0,
  };

  switch (type) {
    case "ADD_TO_CART":
    case "DELETE_FROM_CART":
    case "INCREMENT_CART":
    case "DECREMENT_CART":
      return {
        ...cartState,
        cart: payload,
        cartCount: payload.reduce((acc, curr) => (acc += curr.qty), 0),
        cartTotalPrice: payload.reduce(
          (acc, curr) => (acc += curr.price * curr.qty),
          0
        ),
        cartTotalDiscount: payload.reduce(
          (acc, curr) =>
            (acc += (curr.price - curr.price.discounted) * curr.qty),
          0
        ),
        cartFinalAmount: payload.reduce(
          (acc, curr) => (acc += curr.price * curr.qty),
          0
        ),
      };
    case "CHECKOUT":
      return initialCartState;
    default:
      return cartState;
  }
};
