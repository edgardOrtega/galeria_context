import { createContext, useState } from "react";

// 1) Crear el context

export const CartContext = createContext();

// 2) Crear el Provider

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
        const newCart = [...cart];
        newCart[index].quantity++;
        setCart(newCart);
    }else{
        setCart([...cart,{...product,quantity:1}])
    }
  };

  const removeFromCart = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    if(index === -1) return;
    let newCart = [...cart];

    if(newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
    }else{
        newCart = newCart.filter((item) => item.id!== productId);
    }
    setCart(newCart);
  };


  const getQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }
  const getTotal = () =>{
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }



  return (
    <CartContext.Provider value={{ cart, addToCart, getQuantity, getTotal, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
