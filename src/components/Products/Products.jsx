import { useEffect, useState } from "react";
import Product from "./components/Product/Product";
import "./Products.css";
import Cart from "./components/Cart/Cart";

function Products() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("/data/api.json");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = (id) => {
    let newCart = [...cart];
    let newProduct = {};
    const product = data.find((item) => item.id === id);
    const isOnCart = newCart.find((item) => item.id === id);

    if (isOnCart) {
      isOnCart.cantidad++;
      setCart([...newCart]);
    } else {
      newProduct = {
        ...product,
        cantidad: 1,
      };
      setCart([...cart, newProduct]);
    }
  };

  return (
    <>
      <section className="products-list">
        {data.map((item) => (
          <Product
            id={item.id}
            key={item.id}
            title={item.title}
            precio={item.precio}
            thumbnailUrl={item.thumbnailUrl}
            addCart={addCart}
          />
        ))}
      </section>

      <h4>Shopping Cart</h4>

      <Cart cart={cart} />
    </>
  );
}

export default Products;
