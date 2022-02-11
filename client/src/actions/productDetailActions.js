import axios from "axios"




export const listProductsDetail = (id) =>  async(dispatch) => {
       try{
        dispatch({
            type:'PRODUCT_DETAIL_REQUEST'
        })
    
        const response = await axios.get(`/api/products/${id}`)
        console.log(response.data);
        
        dispatch({
            type:'PRODUCT_DETAIL_SUCCESS',
            payload: response.data,
        })
        
    } catch (error) {
        dispatch({
            type:'PRODUCT_DETAIL_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }

}