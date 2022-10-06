import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {ProductList, Product} from './modules';
import {DeleteModal,  EditModal, AddModal} from './components';

function App() {
  const [productId, setProductId] = useState('')
  const [isProduct, setIsProduct] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})

  function toggleProduct (product) {
    console.log('Prod')
    setIsProduct(!isProduct);
    setProduct(product);
  }

  function toggleDelete (id) {
    setIsDelete(!isDelete);
    setProductId(id);
  }

  function toggleAdd () {
    setIsAdd(!isAdd);
    setProductId(products.at(-1).id + 1);
  }

  function toggleEdit (id) {
    setProductId(id);
    let prodArray = products.filter((product)=>{return product.id===id})
    if (prodArray.length === 1) {setProduct (prodArray[0])}
    console.log(product)
    setIsEdit(!isEdit);
  }

  async function getAPI() {
    const response = await
    fetch('http://localhost:3001/products')
    .then((res) =>{
      return res.json();
    })
    .then((data) => {
      setProducts(data)
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
    console.log(updateProduct)
    const response = await
    fetch('http://localhost:3001/products/'+updateProduct.id, {method: 'PUT', body: JSON.stringify(updateProduct), 
    headers: {
      'Content-Type': 'application/json'
    }})
    .then((res) =>{
      return res.json();
    })
    .then((data) => {
      setProducts(data)
    })
    .catch((err) => {
      console.warn(err);
      alert("Не удалось получить информацию с сервера")
    })
    return await response
  }

  async function addAPI(updateProduct) {
    console.log(updateProduct)
    const response = await
    fetch('http://localhost:3001/products', {method: 'POST', body: JSON.stringify(updateProduct), 
    headers: {
      'Content-Type': 'application/json'
    }})
    .then((res) =>{
      return res.json();
    })
    .then((data) => {
      setProducts(data)
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
       <ProductList 
       toggleProduct={toggleProduct} 
       toggleEdit={toggleEdit} 
       toggleDelete={toggleDelete} 
       list={products}/>

       <button className='add-product-button' onClick={()=>{toggleAdd()}}>+</button>

       {isProduct && (
       <Product product={product} 
          toggleEdit={toggleEdit} 
          toggleDelete={toggleDelete} 
          toggleProduct={toggleProduct} 
       />)}

       {isDelete && (
       <DeleteModal toggleDelete={toggleDelete} 
          deleteAPI={deleteAPI} 
          productId={productId}/>)}

       {isEdit && (
       <EditModal toggleEdit={toggleEdit} 
          editAPI={editAPI} 
          product={product}/>)}

       {isAdd && (
       <AddModal toggleAdd={toggleAdd} 
          addAPI={addAPI} 
          productId={productId}/>)}
       
    </div>
  );
}

export default App;
