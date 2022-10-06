import React from 'react'
import { ProductItem } from '../components'
import { useSelector, useDispatch } from 'react-redux';


const ProductList = (props) => {
  const products = useSelector(state=>state.toggle.products)
  return (
    <div className='product-list'>
      {products.map(product => (
        <ProductItem
            key={product.id}
            product={product}  />
        ))}
    </div>
  )
}

export default ProductList
