# useContext

1. *se incorpora una carpeta para context en src y se crea CartContext.jsx creando el context*
descatar que en Provider se crea las variables globales y funciones globales para reutilizar en diferentes componentes

ej: 
```js
import { createContext, useState } from "react";

// 1) Crear el context

export const CartContext = createContext();
```
luedo se crea la funcion para crear el Provider con su children 

ej:
```js
import { createContext, useState } from "react";

// 1) Crear el context

export const CartContext = createContext();

// 2) Crear el Provider

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

// esta funcion agrega al carrito que estamos creando en este caso que se guardara en cart
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

/* Esta función se usa para eliminar un producto del carrito de compras. El carrito es un array de objetos, donde cada objeto representa un producto con su id y quantity (cantidad en el carrito).*/
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

// Esta función se usa para obtener la cantidad total de productos en el carrito.
  const getQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }

//Esta función calcula el total del valor monetario de todos los productos en el carrito. 
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

```

3. luego de esto envolver en main.jsx o app.jsx el Provider

ej:

```js
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);


```# galeria_context
