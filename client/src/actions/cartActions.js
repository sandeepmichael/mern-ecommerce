import axios from 'axios'

export const addToCart = (id, qty) => async(dispatch, getState) => {

  const response = await axios.get(`/api/products/${id}`)

  dispatch({
      type:'ADD_CART_ITEM',
      payload : {
          product:response.data._id,
          name : response.data.name,
          image: response.data.image,
          price : response.data.price,
          countInStock : response.data.countInStock,
          qty


      }
  })

  localStorage.setItem('cartitems', JSON.stringify(getState().cart.cartItems))




}


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type : 'CART_REMOVE_ITEM',
        payload : id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

