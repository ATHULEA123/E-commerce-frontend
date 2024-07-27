import React,{useState} from 'react'
import "./Navbar.css"
import logo from "../Assets/Frontend_Assets/logo.png";
import carticon from "../Assets/Frontend_Assets/cart_icon.png"
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu,setmenu] = useState("shop");

  return (
    <div className='navbar'>
    <div className='navlogo'>
    <img src={logo} alt="logo" />
    <p>SHOPPER</p>
    </div>
    <ul className='nav-menu'>
    <li onClick={()=>{setmenu("shop")}}><Link to= '/'> Shop </Link> {menu==='shop'? <hr/>:<></>}</li>
    <li onClick={()=>{setmenu("men")}}><Link to= '/mens'>Men</Link>{menu==='men'? <hr/>:<></>}</li>
    <li onClick={()=>{setmenu("women")}}><Link to= '/women'>Women</Link>{menu==='women'? <hr/>:<></>}</li>
    <li onClick={()=>{setmenu("kid")}}><Link to= '/kids'>Kids</Link>{menu==='kid'? <hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>

 <Link to='/login'><button>login</button></Link>
 <Link to='/cart'><img src={carticon} alt=''/></Link>
 <div className='nav-cart-count'>0</div>

    </div>

    </div>
  )
}

export default Navbar