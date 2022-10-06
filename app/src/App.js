import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ProductList, Product} from './modules';
import {DeleteModal,  EditModal, AddModal} from './components';
import {toggleAdd, setProducts} from './store/listSlice'

function App() {

  const isEdit = useSelector(state=>state.toggle.isEdit)
  const isAdd = useSelector(state=>state.toggle.isAdd)
  const products = useSelector(state=>state.toggle.products)
  const product = useSelector(state=>state.toggle.product)
  const isProduct = useSelector(state=>state.toggle.isProduct)
  const isDelete = useSelector(state=>state.toggle.isDelete)

  const dispatch = useDispatch()
  const toggleAddAction = (prop)=> {dispatch(toggleAdd(prop)); console.log(prop)}
  const setProductsAction = (prop)=> {dispatch(setProducts(prop)); console.log(prop)}
 

  async function getAPI() {
    const response = await
    fetch('http://localhost:3001/products')
    .then((res) =>{
      return res.json();
    })
    .then((data) => {
      setProductsAction(data)
    })
    .catch((err) => {
      console.warn(err);
      alert("Не удалось получить информацию с сервера")
    })
    return await response
  }

  async function deleteAPI(id) {
    const response = await
    fetch('http://localhost:3001/products/'+id, {method: 'DELETE',})
    .then((res) =>{
      return res.json();
    })
    .catch((err) => {
      console.warn(err);
      alert("Не удалось получить информацию с сервера")
    })
    return await response
  }

  async function editAPI(updateProduct) {
    const response = await
    fetch('http://localhost:3001/products/'+updateProduct.id, {method: 'PUT', body: JSON.stringify(updateProduct), 
    headers: {
      'Content-Type': 'application/json'
    }})
    .then((res) =>{
      return res.json();
    })
    .then((data) => {
      setProductsAction(data)
    })
    .catch((err) => {
      console.warn(err);
      alert("Не удалось получить информацию с сервера")
    })
    return await response
  }

  async function addAPI(updateProduct) {
    const response = await
    fetch('http://localhost:3001/products', {method: 'POST', body: JSON.stringify(updateProduct), 
    headers: {
      'Content-Type': 'application/json'
    }})
    .then((res) =>{
      return res.json();
    })
    .then((data) => {
      setProductsAction(data)
    })
    .catch((err) => {
      console.warn(err);
      alert("Не удалось получить информацию с сервера")
    })
    return await response
  }


  useEffect(()=>{
    getAPI()
    
    console.log(products)
  }, [])

  return (
    <div className="App">
       <ProductList />

       <button className='add-product-button' onClick={()=>{toggleAddAction()}}>+</button>

       {isProduct && (
       <Product />)}

       {isDelete && (
       <DeleteModal deleteAPI={deleteAPI} />)}

       {isEdit && (
       <EditModal  editAPI={editAPI} 
          product={product}/>)}

       {isAdd && (
       <AddModal  addAPI={addAPI} />)}
       
    </div>
  );
}

export default App;
