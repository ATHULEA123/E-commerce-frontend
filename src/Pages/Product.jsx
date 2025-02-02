import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrum/Breadcrums'
import Productdisplay from '../Components/Productdisplay/Productdisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const{productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
  <Breadcrums product={product}/>
  <Productdisplay product={product}/>
    </div>
  )
}

export default Product