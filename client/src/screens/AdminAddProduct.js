import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddProduct } from '../actions/productActions'

import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from'../components/Success'



const AdminAddProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [countInStock, setCountInStock] = useState('')
  const [category, setCategory] = useState('')

  const dispatch = useDispatch()

  const productstate = useSelector((state) => state.AddproductReducers)
  const {success, error, loading} = productstate

const SubmitHandler = (e) => {
  e.preventDefault()
  const product = {
    name,
    price,
    description,
    image,
    countInStock,
    category,
    brand
  }
  console.log(product)
  dispatch(AddProduct(product))
}


  return (
    <div>
      <div>
      <h2>Add Product</h2>
      {loading && <Loader />}
      {error && <Error error='something went wrong'/>}
      {success && <Success success='New product added successfully'/>}

      <form onSubmit={SubmitHandler}>
        <input className='form-control' type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        <hr/>
        <input className='form-control' type='text' placeholder='brand' value={brand} onChange={(e) => setBrand(e.target.value)}/>
        <hr/>
        <input className='form-control' type='text' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        <hr/>
        <input className='form-control' type='text' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <hr/>
        <input className='form-control' type='text' placeholder='category' value={category} onChange={(e) => setCategory(e.target.value)}/>
        <hr/>
        <input className='form-control' type='text' placeholder='Imageurl' value={image} onChange={(e) => setImage(e.target.value)}/>
        <hr/>
        <input className='form-control' type='text' placeholder='countinstock' value={countInStock} onChange={(e) => setCountInStock(e.target.value)}/>
        <button className='btn btn-primary mt-3' type='submit'>Add Product</button>
      </form>

      </div>
     
    </div>
  )
}

export default AdminAddProduct