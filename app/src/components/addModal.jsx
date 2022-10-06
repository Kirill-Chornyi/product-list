import React from 'react'
import { useState } from 'react'
import product from '../modules/product'

const AddModal = (props) => {
  const [updateProduct, setUpdateProduct] = useState({
    "id": props.productId,
    "imageUrl": "",
    "name": "",
    "count": "",
    "size": {
      "width": "",
      "height": ""
    },
    "weight": "",
    "comments": []
  })

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
          <svg onClick={()=>{props.toggleAdd('')}} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <form className='edit-form'>
            <div>
              <label htmlFor="input1">Name:  </label> <input name="name" type="text" id="input1" onChange={()=>{handleChange ( document.querySelector("#input1").name, document.querySelector("#input1").value)}}/> 
            </div>

            <div>
              <label htmlFor="input3">Count: </label> <input name="count" type="text" id="input3" onChange={(event)=>{handleChange ( document.querySelector("#input3").name, event.target.value)}}/> 
            </div> 

            <div>
              <label htmlFor="input4">Weight: </label> <input name="weight" type="text" id="input4" onChange={(event)=>{handleChange ( document.querySelector("#input4").name, event.target.value)}}/> 
            </div>

            <div className='flex'>
               <p>Size:</p>
               <div className='flex-column'>
                    <label htmlFor="input5">Width </label> <input name="size.width" type="text" id="input5" onChange={(event)=>{handleChange ( document.querySelector("#input5").name, event.target.value)}}/> 
                    <label htmlFor="input6">Height </label> <input name="size.height" type="text" id="input6" onChange={(event)=>{handleChange ( document.querySelector("#input6").name, event.target.value)}}/> 
               </div>
            </div>

            <div>
              <label htmlFor="input2">Image URL:  </label> <input name="imageUrl" type="text" id="input2" onChange={(event)=>{handleChange ( document.querySelector("#input2").name, event.target.value)}}/>
            </div>
        
          <div className='edit-button-container'>
            <button onClick={()=>{props.addAPI(updateProduct)}}> Save </button>
            <button onClick={()=>{props.toggleAdd('')}}> Go back >> </button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default AddModal