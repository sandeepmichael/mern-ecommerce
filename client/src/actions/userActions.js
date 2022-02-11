import axios from 'axios'



export const register = (user) => async (dispatch) => {
    try {
        dispatch({
            type:"USER_REGISTER_REQUEST"
        })

     
        const response = await axios.post('/api/users/register', user)
        dispatch({
            type:'USER_REGISTER_SUCCESS',
            payload:response.data,
        })
        
        
    } catch (error) {
        dispatch({
            type:'USER_REGISTER_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
        
    }
}




export const login = (user) => async (dispatch) => {
    try {
        dispatch({
            type:"USER_LOGIN_REQUEST"
        })

        
        const response = await axios.post('/api/users/login', user)
        dispatch({
            type:'USER_LOGIN_SUCCESS',
            payload:response.data,
        })

     
       localStorage.setItem('currentUser', JSON.stringify(response.data))  
       window.location.href = '/'      
        
    } catch (error) {
        dispatch({
            type:'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
        
    }

}


export const getAllusers = () =>  async(dispatch) => {
    try{
     dispatch({
         type:'GET_USERS_REQUEST'
     })
 
     const response = await axios.get('/api/users/getallusers')
     console.log(response.data);
     
     dispatch({
         type:'GET_USERS_SUCCESS',
         payload: response.data,
     })
     
 } catch (error) {
     dispatch({
         type:'GET_USERS_FAIL',
         payload: error.response && error.response.data.message ? error.response.data.message : error.message
     })
     
 }
}

export const Deleteuser = (userid) => async () => {
    try {
        const response = await axios.post('/api/users/deleteuser', {userid})
        console.log(response)
        alert('user Deleted')
        window.location.reload()
        
    } catch (error) {
        console.log(error)
    }
}