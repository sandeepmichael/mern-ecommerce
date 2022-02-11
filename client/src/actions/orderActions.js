import axios from "axios";


export const placeOrder = (token, price) => async (dispatch, getState) => {
    try {
        dispatch({type:'PLACE_ORDER_REQUEST'})
         const currentUser = getState().Login.currentUser;
         const cartItems = getState().cart.cartItems

        const response = await axios.post('/api/orders/placeorder', {token, price, currentUser, cartItems})
        console.log(response.data);
        dispatch({
            type:'PLACE_ORDER_SUCCESS',
        })

        
    } catch (error) {
        dispatch({type:'PLACE_ORDER_FAILED'})
        console.log(error);
    }
}

export const getUserOrders = () =>  async(dispatch, getState) => {
    const currentUser = getState().Login.currentUser
    try{
     dispatch({
         type:'GET_USER_ORDER_REQUEST'
     })
 
     const response = await axios.post('/api/orders/getuserorders', {userid:currentUser._id})
     
     console.log(response.data);
     
     dispatch({
         type:'GET_USER_ORDER_SUCCESS',
         payload: response.data,
     })
     
 } catch (error) {
     dispatch({
         type:'GET_USER_ORDER_FAILED',
         payload: error.response && error.response.data.message ? error.response.data.message : error.message
     })
     
 }

}



export const getAllOrders = () =>  async(dispatch) => {
 
    try{
     dispatch({
         type:'GET_ALL_ORDERS_REQUEST'
     })
 
     const response = await axios.get('/api/orders/getallorders')
     
     console.log(response.data);
     
     dispatch({
         type:'GET_ALL_ORDERS_SUCCESS',
         payload: response.data,
     })
     
 } catch (error) {
     dispatch({
         type:'GET_ALL_ORDERS_FAILED',
         payload: error.response && error.response.data.message ? error.response.data.message : error.message
     })
     
 }

}


export const deliverOrder = (orderid) => async (dispatch) => {
    try {
        const response = await axios.post('/api/orders/deliverorder', {orderid})
        console.log(response)
        alert('order Delivered')
        const orders = await axios.get('/api/orders/getallorders')
        dispatch({type:'GET_ALL_ORDERS_SUCCESS',
    payload:orders.data})
        
    } catch (error) {
        console.log(error)
    }
}