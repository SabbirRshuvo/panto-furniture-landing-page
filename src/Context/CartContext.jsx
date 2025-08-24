/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    } else {
      setCartItems([...cartItems, product]);
      Swal.fire({
        title: "Added Successfully!",
        icon: "success",
        draggable: true,
      });
    }
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
