import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleProduct} from '../store/listSlice'

const ProductItem = (props) => {
  // const dispatch = useDispatch()
  // const toggleProductAction = ()=>{dispatch(toggleProduct)}
  return (
    <div className='product-item' >
      <div className='product-item-information' onClick={()=>{props.toggleProduct(props.product)}}>
        <img src={props.url} width="100"></img>
        <p> {props.name}</p>
        <p> Count: {props.count}</p>
        <p>Comments: {props.comments.length}</p>
      </div>
      
      <div className='button-container'>
        <button onClick={()=>{props.toggleEdit(props.product.id)}}>Edit</button>
        <button onClick={()=>{props.toggleDelete(props.product.id)}}>Delete</button>
      </div>
    </div>
  )
}

export default ProductItem
