import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toggleProduct, toggleDelete, toggleEdit} from '../store/listSlice'

const Product = (props) => {
  const product = useSelector(state=>state.toggle.product)
  const dispatch = useDispatch()
  const toggleProductAction = (prop)=> {dispatch(toggleProduct(prop)); console.log(prop)}
  const toggleDeleteAction = (prop)=> {dispatch(toggleDelete(prop)); console.log(prop)}
  const toggleEditAction = (prop)=> {dispatch(toggleEdit(prop)); console.log(prop)}
  return (
    <div className="overlay">
      <div className="modal">
      <svg onClick={()=>{toggleProductAction('')}} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
      <img src={product.imageUrl} width="300"></img>
      <p> {product.name}</p>
      <p> Count: {product.count}</p>
      <p>Comments: {product.comments.map(comment => (
        <p className='comment'> {comment} </p>
        )) }</p>
      <div className='product-button-container'>
        <button onClick={()=>{toggleEditAction(product.id)}}>Edit</button>
        <button onClick={()=>{toggleDeleteAction(product.id)}}>Delete</button>
      </div>
    </div>
    </div>
  )
}

export default Product
