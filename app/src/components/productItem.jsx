import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleProduct, toggleDelete, toggleEdit} from '../store/listSlice'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const toggleProductAction = (prop)=> {dispatch(toggleProduct(prop)); console.log(prop)}
  const toggleDeleteAction = (prop)=> {dispatch(toggleDelete(prop)); console.log(prop)}
  const toggleEditAction = (prop)=> {dispatch(toggleEdit(prop)); console.log(prop)}

  
  return (
    <div className='product-item' >
      <div className='product-item-information' onClick={()=>{toggleProductAction(props.product)}}>
        <img src={props.product.imageUrl} width="100"></img>
        <p> {props.product.name}</p>
        <p> Count: {props.product.count}</p>
        <p> Comments: {props.product.comments.length}</p>
      </div>
      
      <div className='button-container'>
        <button onClick={()=>{toggleEditAction(props.product.id)}}>Edit</button>
        <button onClick={()=>{toggleDeleteAction(props.product.id)}}>Delete</button>
      </div>
    </div>
  )
}

export default ProductItem
