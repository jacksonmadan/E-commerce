import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import BreadCrumps from '../Components/BreadCrumps/BreadCrumps';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <BreadCrumps product={product}/>
      
    </div>
  )
}

export default Product
