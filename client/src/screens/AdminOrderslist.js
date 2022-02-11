import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllOrders, deliverOrder } from '../actions/orderActions'
import Loader from '../components/Loader'
import Error from '../components/Error'

const AdminOrderslist = () => {
  const dispatch = useDispatch()
  const getstate = useSelector((state) => state.getallordersReducers)
   const {orders, error, loading} = getstate

useEffect(() =>{
  dispatch(getAllOrders())
}, [dispatch])


  return (
    <div>
      <h1>Orders List</h1>
      {loading && (<Loader />)}
      {error && <Error error='something went wrong'/>}

      <table className='table'>

         <thead>
            <tr>
              <th>order Id</th>
              <th>Email</th>
              <th>User Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
         </thead>
         <tbody>
           {orders && orders.map(order => {
             return <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>

                    {order.isDelivered ? (<h5>Delivered</h5>) : (<button className='btn btn-primary' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}
                  </td>
             </tr>
           })}
         </tbody>

      </table>





    </div>
  )
}

export default AdminOrderslist