import React, { useState } from 'react';
import './Navbar.css';
import logp from "../Assets/logo.png";
// import cart_icon from '../Assets/cart_icon.png';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logp} alt="logo"/>
        <p>ShopKaro</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{textDecoration:'none'}} to='/'>Shop</Link>
          {menu === "shop" ? <hr/> : null}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>
          {menu === "mens" ? <hr/> : null}
        </li>
        <li onClick={() => { setMenu("women") }}>
          <Link style={{textDecoration:'none'}}  to='/women'>Women</Link>
          {menu === "women" ? <hr/> : null}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>
          {menu === "kids" ? <hr/> : null}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><CiShoppingCart className='cart'/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar;
