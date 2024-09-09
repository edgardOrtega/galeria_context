import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=20"
      );
      setProducts(response.data);
    })();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40",
        }}
      >
        {products.map((product) => {
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
              <p>{product.price}</p>

              <button onClick={()=>{addToCart(product)}}>add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
