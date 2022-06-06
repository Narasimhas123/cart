import "./Cart.css";

function Cart({ cart, addToCart, onRemove }) {
  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
      {cart.length === 0 && <div>Cart is empty</div>}
      <div className="cart">
        {cart.map((item) => {
          return (
            <div key={item.id} className="cart-box">
              <div className="image-cart">
                <img
                  src={item.imageURL}
                  alt="img not found"
                  className="cart-image"
                />
              </div>
              <div className="cart-name">{item.name}</div>
              <div className="counting">
                <button className="add" onClick={() => addToCart(item)}>
                  +
                </button>
                <input type="text" className="cart-input" value={item.qty} />

                <button className="minaz" onClick={() => onRemove(item)}>
                  -
                </button>
              </div>
              <div className="cart-price">${item.price.toFixed(2)}</div>

              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              <div className="col-2">
                Shipping Price
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
