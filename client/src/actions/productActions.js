import axios from "axios"





export const listProducts = () =>  async(dispatch) => {
       try{
        dispatch({
            type:'PRODUCT_LIST_REQUEST'
        })
    
        const response = await axios.get('/api/products')
        console.log(response.data);
        
        dispatch({
            type:'PRODUCT_LIST_SUCCESS',
            payload: response.data,
        })
        
    } catch (error) {
        dispatch({
            type:'PRODUCT_LIST_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }

}




export const FilterProducts = (searchkey) =>  async(dispatch) => {

    var filteredproducts;
    try{
     dispatch({
         type:'PRODUCT_LIST_REQUEST'
     })
 
     const response = await axios.get('/api/products')
     filteredproducts = response.data.filter(product => product.name.toLowerCase().includes(searchkey))
    // console.log(response.data);
     
     dispatch({
         type:'PRODUCT_LIST_SUCCESS',
         payload: filteredproducts,
     })
     
 } catch (error) {
     dispatch({
         type:'PRODUCT_LIST_FAIL',
         payload: error.response && error.response.data.message ? error.response.data.message : error.message
     })
     
 }

}




export const AddProduct = (product) =>  async(dispatch) => {

    
    try{
     dispatch({
         type:'ADD_PRODUCT_REQUEST'
     })
 
     const response = await axios.post('/api/addproduct', {product})
  
    console.log(response.data);
     
     dispatch({
         type:'ADD_PRODUCT_SUCCESS',
     })
     
 } catch (error) {
     dispatch({
         type:'ADD_PRODUCT_FAIL',
         payload: error.response && error.response.data.message ? error.response.data.message : error.message
     })
     
 }

}

export const editProduct = (updatedproduct) =>  async(dispatch) => {

    
    try{
     dispatch({
         type:'EDIT_PRODUCT_REQUEST'
     })
 
     const response = await axios.post('/api/editproduct', {updatedproduct})
  
    console.log(response.data);
     
     dispatch({
         type:'EDIT_PRODUCT_SUCCESS',
     })
     
 } catch (error) {
     dispatch({
         type:'EDIT_PRODUCT_FAIL',
         payload: error.response && error.response.data.message ? error.response.data.message : error.message
     })
     
 }

}





export const getproductByid = (productid) =>  async(dispatch) => {

    
    try{
     dispatch({
         type:'GET_PRODUCTBYID_REQUEST'
     })
 
     const response = await axios.post('/api/getproductbyid', {productid})
  
    console.log(response.data);
     
     dispatch({
         type:'GET_PRODUCTBYID_SUCCESS',
         payload:response.data
     })
     
 } catch (error) {
     dispatch({
         type:'GET_PRODUCTBYID_FAIL',
         payload: error.response && error.response.data.message ? error.response.data.message : error.message
     })
     
 }

}



export const deleteproduct = (productid) => async(dispatch) => {
    try{
    const response = await axios.post('/api/deleteproduct', {productid})
    alert('product Deleted successfully..')
    console.log(response)
    window.location.reload()
    }
    catch(error){
        console.log(error)
    }
}










