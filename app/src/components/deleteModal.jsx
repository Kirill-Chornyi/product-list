import React from 'react'

const deleteModal = (props) => {
  return (
    <div className="overlay">
        <div className="modal">
          <svg onClick={()=>{props.toggleDelete('')}} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <p className='delete-label'>Are you sure?</p>
          <div className='delete-button-container'>
            <button onClick={()=>{props.deleteAPI(props.productId)}}>Delete</button>
            <button onClick={()=>{props.toggleDelete('')}}> Go back >> </button>
          </div>
        </div>
    </div>
  )
}

export default deleteModal
