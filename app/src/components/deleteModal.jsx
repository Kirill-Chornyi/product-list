import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import {toggleDelete} from '../store/listSlice'

const DeleteModal = (props) => {
  const productId = useSelector(state=>state.toggle.productId)
  const dispatch = useDispatch()
  const toggleDeleteAction = (prop)=> {dispatch(toggleDelete(prop)); console.log(prop)}
  return (
    <div className="overlay">
        <div className="modal">
          <svg onClick={()=>{toggleDeleteAction('')}} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <p className='delete-label'>Are you sure?</p>
          <div className='delete-button-container'>
            <button onClick={()=>{props.deleteAPI(productId)}}>Delete</button>
            <button onClick={()=>{toggleDeleteAction('')}}> Go back >> </button>
          </div>
        </div>
    </div>
  )
}

export default DeleteModal
