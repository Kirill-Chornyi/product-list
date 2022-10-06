import React from 'react'
import { ProductItem } from '../components'

const productList = (props) => {

  return (
    <div className='product-list'>
      {props.list.map(product => (
        <ProductItem
            toggleDelete={props.toggleDelete}
            toggleEdit={props.toggleEdit}
            toggleProduct={props.toggleProduct}
            key={product.id}
            url={product.imageUrl}
            name={product.name}
            count={product.count}
            comments={product.comments}
            product={product}
            />
        ))}
    </div>
  )
}

export default productList
