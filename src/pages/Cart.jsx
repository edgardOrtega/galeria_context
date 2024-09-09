import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div>
      <h1>Cart </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40",
        }}
      >
        {cart.map((product) => {
          return (
            <div
              style={{ width: "400px", border: "solid whiter 1px " }}
              key={product.id}
            >
              <h2>{product.id}</h2>
              <p>{product.title}</p>
              <img
                style={{ width: "200px" }}
                src={product.image}
                alt={product.title}
              />
              <p>$ {product.price} u</p>
              <p>x{product.price}</p>
              <p>Total: {product.price * product.quantity}</p>
              <div style={{display:'flex', justifyContent: 'center'}}>
              <button onClick={()=>{addToCart(product)}} style={{marginRight:'10px'}}>+</button>
                <p style={{marginRight:'10px'}}>x {product.quantity}</p>
                <button onClick={()=>{removeFromCart(product.id)}} style={{marginRight:'10px'}}>-</button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
