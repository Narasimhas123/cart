
import './NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function NavBar({search, handelChange}){
  return(
    <div className="navbar">
    <h2 className="ecom">Ecom</h2>
    <input type="text" className='input' value={search} onChange={handelChange} />
    
  <ShoppingCartIcon  className='cart-icon'/>
  
    </div>
  )
}

export default NavBar