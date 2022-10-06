import React from 'react'
import { useState } from 'react'
import product from '../modules/product'
import { useSelector, useDispatch } from 'react-redux'
import {toggleEdit} from '../store/listSlice'

const EditModal = (props) => {
  const product = useSelector(state=>state.toggle.product)
  const [updateProduct, setUpdateProduct] = useState(product)
  const dispatch = useDispatch()
  const toggleEditAction = (prop)=> {dispatch(toggleEdit(prop)); console.log(prop)}

  function handleChange (key, value) {
    let property = {}
    property[key] = value

    setUpdateProduct(updateProduct=>({
      ...updateProduct,
      ...property
      }))


    console.log(property)
    console.log(updateProduct)
  }

  return (
    <div className="overlay">
        <div className="modal">
          <svg onClick={()=>{toggleEditAction('')}} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <p className='edit-label'>{product.name}</p>
          <form className='edit-form'>
            <div>
              <label htmlFor="input1">Name:  </label> <input name="name" type="text" value={updateProduct.name} id="input1" onChange={()=>{handleChange ( document.querySelector("#input1").name, document.querySelector("#input1").value)}}/> 
            </div>

            <div>
              <label htmlFor="input3">Count: </label> <input name="count" type="text" value={updateProduct.count} id="input3" onChange={(event)=>{handleChange ( document.querySelector("#input3").name, event.target.value)}}/> 
            </div> 

            <div>
              <label htmlFor="input4">Weight: </label> <input name="weight" type="text" value={updateProduct.weight} id="input4" onChange={(event)=>{handleChange ( document.querySelector("#input4").name, event.target.value)}}/> 
            </div>

            <div>
              Size: 
              <label htmlFor="input5">Width </label> <input name="size.width" type="text" value={updateProduct.size.width} id="input5" onChange={(event)=>{handleChange ( document.querySelector("#input5").name, event.target.value)}}/> 
              <label htmlFor="input6">Height </label> <input name="size.height" type="text" value={updateProduct.size.height} id="input6" onChange={(event)=>{handleChange ( document.querySelector("#input6").name, event.target.value)}}/> 
            </div>

            <div>
              <label htmlFor="input2">Image URL:  </label> <input name="imageUrl" type="text" value={updateProduct.imageUrl} id="input2" onChange={(event)=>{handleChange ( document.querySelector("#input2").name, event.target.value)}}/>
            </div>
        
          <div className='edit-button-container'>
            <button onClick={()=>{props.editAPI(updateProduct)}}> Save </button>
            <button onClick={()=>{toggleEditAction('')}}> Go back >> </button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default EditModal
