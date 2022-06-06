import { useEffect, useState } from "react";
// import Cart from "./NavBar/Cart/Cart";
import Cart from "./Cart";

import NavBar from "./NavBar/NavBar";
import "./styles.css";
export default function App() {
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState("");
  const [finds, setFinds] = useState(display);
  const [cart, setCart] = useState([]);
  const filter = (e) => {
    const word = e.target.value;
    if (word !== "") {
      const result = display.filter((product) => {
        return product.name.toLowerCase().startsWith(word.toLowerCase());
      });
      setFinds(result);
    } else {
      setFinds(display);
    }
    setSearch(word);
  };
  const addToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  useEffect(() => {
    fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    )
      .then((res) => res.json())
      .then((data) => setDisplay(data));
  }, []);
  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      {/* <Cart display={display}/> */}
      <Cart cart={cart} addToCart={addToCart} onRemove={onRemove} />

      <NavBar search={search} handelChange={filter} />
      <div className="product">
        {finds && finds.length > 0 ? (
          finds.map((product) => {
            return (
              <div key={product.id} className="product-array">
                <div className="image-div">
                  <img
                    src={product.imageURL}
                    alt="img not found"
                    className="product-image"
                  />
                </div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}₹</div>
                <div className="add-cart">
                  <button type="submit" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>not found</h1>
        )}
      </div>
    </div>
  );
}
