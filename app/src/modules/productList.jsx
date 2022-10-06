import React from 'react'
import { ProductItem } from '../components'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';



const ProductList = (props) => {
  const [arr, setArr] = useState([])
  const products = useSelector(state=>state.toggle.products)
  

  useEffect(()=>{ 
    sortFunction ()   
  }, [])

  function sortFunction (sort) {
    let product_list = document.querySelector('.product-list');
    if (sort==='alphabet') {[...product_list.children]
      .sort((a,b)=>a.dataset.name > b.dataset.name ? 1 : -1 )
      .forEach(node=>product_list.appendChild(node));}
    else if (sort==='comment') {[...product_list.children]
      .sort((a,b)=>a.dataset.comment < b.dataset.comment ? 1 : -1 )
      .forEach(node=>product_list.appendChild(node));}
    else if (sort==='count') {[...product_list.children]
      .sort((a,b)=> a.dataset.count - b.dataset.count < 0 ? 1 : -1 )
      .forEach(node=>product_list.appendChild(node));}
    else if (sort==='weight') {[...product_list.children]
      .sort((a,b)=>a.dataset.weight < b.dataset.weight ? 1 : -1 )
      .forEach(node=>product_list.appendChild(node));}
      
        console.log('banana')
  }

  return (
    
    <div>
      <div className='sort-button'>
        <button onClick={()=>{sortFunction('alphabet')}}>A-z</button>
        <button onClick={()=>{sortFunction('comment')}}>Comments</button>
        <button onClick={()=>{sortFunction('count')}}>Count</button>
        <button onClick={()=>{sortFunction('weight')}}>Weight</button>
      </div>
      <div className='product-list'>
        {
        products.map(product => (
          <ProductItem
              key={product.id}
              product={product}  />
          )) }
        </div>
    </div>
  )
}

export default ProductList
