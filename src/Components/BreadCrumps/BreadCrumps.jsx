import React from 'react'
import './BreadCrumps.css'
import arrow from '../Assets/breadcrum_arrow.png'
const BreadCrumps = (props) => {
    const {product}=props;
  return (
    <div className='breadcrump'>
      HOME <img src={arrow} alt="" /> Shop<img src={arrow} alt="" /> {product.category}<img src={arrow} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrumps
