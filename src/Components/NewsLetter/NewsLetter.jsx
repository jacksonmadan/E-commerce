import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Eclusive Offer On Your Email</h1>
      <p>subscibe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscibe</button>
      </div>
    </div>
  )
}

export default NewsLetter
