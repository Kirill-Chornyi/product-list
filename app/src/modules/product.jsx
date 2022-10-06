import React from 'react'

const product = (props) => {
  return (
    <div className="overlay">
      <div className="modal">
      <svg onClick={()=>{props.toggleProduct('')}} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
      <img src={props.product.imageUrl} width="300"></img>
      <p> {props.product.name}</p>
      <p> Count: {props.product.count}</p>
      <p>Comments: {props.product.comments.map(comment => (
        <p className='comment'> {comment} </p>
        )) }</p>
      <div className='product-button-container'>
        <button onClick={()=>{props.toggleEdit(props.product.id)}}>Edit</button>
        <button onClick={()=>{props.toggleDelete(props.product.id)}}>Delete</button>
      </div>
    </div>
    </div>
  )
}

export default product
