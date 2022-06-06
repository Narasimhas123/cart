import './Cart.css'

function Cart ({display}){
  return(
    <div>
    Cart
    <div className="cart-product">
    {display.map((product)=>{
      return(
        <div key={product.id} className="cart-div">
          <div className="cart-img">
       <img src={product.imageURL} alt="img not found" className="product-image"/>
       <div className='cart-name'>
       {product.name}
       </div>
       </div>
       <div className='quantity'>
         <button className='plus'>+</button>
         <input type="number" className="cart-input" />
         <button className='minuze'>-</button>
       </div>
       <div className='cart-price'>
       {product.price}₹
       </div>
        </div>
      )
    })}
    </div>
    </div>
  )
}

export default Cart;