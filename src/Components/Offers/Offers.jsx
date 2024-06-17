import React from 'react'
import './Offers.css'
import exclu_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='Offers'>
      <div className="offers-left">
   <h1>Exclusive</h1>
   <h1>Offers for you</h1>
   <p>ONLY ON BEST SELLER PRODUCTS</p>
      <button>Check now</button>

      </div>

      <div className="offers-right">
        <img src={exclu_img} alt="" />

      </div>
    </div>
  )
}

export default Offers
