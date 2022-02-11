import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteproduct, listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Filter from '../components/Filter';
import Error from '../components/Error'

const AdminProductslist = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
       
        dispatch(listProducts())
         
   }, [dispatch])

  return (
    <div>
        <h2>Products list</h2>
        {loading && <Loader />}
        {error && <Error error='something went wrong'/>}
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>

       
        <tbody>
        {products && products.map(product => {
            return <tr>
                   <td>{product.name}</td>
                   <td>{product.price}</td>
                   <td>{product.category}</td>
                   <td>
                       <i class='fa fa-trash m-1' onClick={() =>{dispatch(deleteproduct(product._id))}}></i>
                       <Link to={`/admin/editproduct/${product._id}`}><i class='fa fa-edit m-1'></i></Link>
                   </td>
            </tr>
        })}
        </tbody>
        </table>
       
    </div>
  )
}

export default AdminProductslist