import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getproductByid } from '../actions/productActions'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { editProduct } from '../actions/productActions'
import Success from '../components/Success'


const Editproduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [category, setCategory] = useState('')
  
    const params = useParams()
    const dispatch = useDispatch()

    const productstate = useSelector((state) => state.getproductbyidReducers)
    const {product, loading, error} = productstate

    const editproductstate = useSelector((state) => state.editproductReducers)
    const {editloading, editerror, editsuccess} = editproductstate

 useEffect(() => {
      if(product){
          if(product._id === params.productid){
              setName(product.name)
              setBrand(product.brand)
              setPrice(product.price)
              setCategory(product.category)
              setDescription(product.description)
              setCountInStock(product.countInStock)
              setImage(product.image)
          } else {
            dispatch(getproductByid(params.productid))
          }

      } else {
        dispatch(getproductByid(params.productid))
      }




    
 }, [product, dispatch])

 const SubmitHandler = (e) => {
    e.preventDefault()
    const updatedproduct = {
        _id:params.productid,
      name,
      price,
      description,
      image,
      countInStock,
      category,
      brand
    }
   
    dispatch(editProduct(updatedproduct))
  }
  


  return (
    <div>
       <h2>Edit Product</h2>
       <h2>productid: {params.productid}</h2>
       <div>
            {loading && <Loader />}
            {error && <Error error='something went wrong'/>}
            {editsuccess && <Success success='product updated successfully'/>}

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
        <button className='btn btn-primary mt-3' type='submit'>Edit Product</button>
      </form>

      </div>
     



    </div>
  )
}

export default Editproduct