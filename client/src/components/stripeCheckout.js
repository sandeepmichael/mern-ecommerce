import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Loader from '../components/Loader';
import Success from './Success'
import Error from './Error';


const Checkout = ({price}) => {
   
     const dispatch = useDispatch()
 
     const orderstate = useSelector((state) => state.placeOrderReducers)
     const {loading, error, success} = orderstate;

 const tokenHandler = (token) => {
     console.log(token);
     dispatch(placeOrder(token, price))
 }

 
  return <div>
      {loading && (<Loader />)}
      {error && (<Error error='something went wrong'/>)}
      {success && (<Success success='Your Order Placed Successfully..!'/>)}
   
    
      <StripeCheckout
          amount={price*100}
          shippingAddress
          stripeKey='pk_test_51JFEwOSAYBgu61o0YcICNpABH2dthEbfCF9NKRhcyxsr87VuntfecBwX8dGvS18A1UGwoADcI72ruKRHXhNZfTNU00rEDZKmhV'
          token={tokenHandler}
          currency='INR'

          >
         {localStorage.getItem('currentUser') ? <button className='btn btn-primary'>Pay Now</button> : <Error error='please sign in to pay'/>  }
          

      </StripeCheckout>




  </div>;
};

export default Checkout;
