export const cartReducer = (cartState, { type, payload }) => {
  const initialCartState = {
    cart: [],
    cartCount: 0,
    cartTotalPrice: 0,
    cartTotalDiscount: 0,
    cartFinalAmout: 0,
  };
  console.log(initialCartState);

  switch (type) {
    case "ADD_TO_CART":
    case "DELETE_FROM_CART":
    case "INCREMENT_CART":
    case "DECREMENT_CART":
      return {
        ...cartState,
        cart: payload,
        cartCount: payload.reduce((acc, curr) => (acc += curr.quantity), 0),
        cartTotalPrice: payload.reduce(
          (acc, curr) => (acc += curr.price.original * curr.quantity),
          0
        ),
        cartTotalDiscount: payload.reduce(
          (acc, curr) =>
            (acc +=
              (curr.price.original - curr.price.discounted) * curr.quantity),
          0
        ),
        cartFinalAmout: payload.reduce(
          (acc, curr) => (acc += curr.price.discounted * curr.quantity),
          0
        ),
      };
    case "CHECKOUT":
      return initialCartState;
    default:
      return cartState;
  }
};
