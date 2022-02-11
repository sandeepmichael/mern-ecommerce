import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import { Card } from 'react-bootstrap';
import Loader from '../components/Loader';
import Error from '../components/Error'

const OrderScreen = () => {

const dispatch = useDispatch()
const orderstate = useSelector((state) => state.getUserOrderReducers)
const {error, loading, orders} = orderstate
 useEffect(() => {
      dispatch(getUserOrders())
 }, [dispatch])





  return <div>
       <h2 style={{fontSize:'35px'}}>My Orders</h2>
      <div className='row justify-content-center'>
           {loading && <Loader/>}
           {error && <Error error='something went wrong'/>} 
           {orders && orders.map(order => {
                return <div className='col-md-8'>
                       <Card className='flex-container'>
                          <div>
                               <h2 style={{fontSize:'25px'}}>Items :-</h2>
                               {order.orderItems.map(item => {
                                    return <div>
                                         <h5>{item.name} * {item.qty}={item.price}</h5>
                                    </div>
                               })}
                          </div>
                         <hr />
                          <h2 style={{fontSize:'25px'}}>Address :-</h2>
                          <h5>street: {order.shippingAddress.street}</h5>
                          <h5>city: {order.shippingAddress.city}</h5>
                          <h5>country: {order.shippingAddress.country}</h5>
                          <h5>pincode: {order.shippingAddress.pincode}</h5>
                          <hr />
                          <h5>Order Info :-</h5>
                          <h5>Amount: {order.orderAmount}</h5>
                          <h5>Date: {order.createdAt.substring(0, 10)}</h5>
                          <h5>orderId: {order._id}</h5>
                          <hr/>
                        
                          



                     </Card>
                     </div>
           })}

      </div>
  
  
  
  
  </div>;
};

export default OrderScreen;
