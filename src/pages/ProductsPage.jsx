import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store/store'
function ProductsPage() {
  const {singleProduct} = useSelector((state)=>state.productStore)
  return (
    <div>
      <h2>{singleProduct.title}</h2>
      <h2>{singleProduct.desc}</h2>
      <p>{singleProduct.price}</p>
    </div>
  )
}

export default ProductsPage