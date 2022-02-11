import React, {useEffect} from 'react'
import { useNavigate, BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

const AdminScreen = () => {
    const getstate = useSelector(state => state.Login)
  const {currentUser} = getstate
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
      if(!currentUser.isAdmin){
          navigate('/')
      }

  }, [])
 

  return (
    <div>
        <div className='row'>
            <div className='col-md-10'>
            <h2 style={{paddingLeft:'40%'}}>Admin Panel</h2>
         <ul className='adminarea'>
             <li><Link to='/admin/userslist'>users list</Link></li>
             <li><Link to='/admin/productslist'>products list</Link></li>
             <li><Link to='/admin/addproduct'>Add product</Link></li>
             <li><Link to='/admin/orderslist'>orders list</Link></li>
         </ul>
      
            </div>

        </div>

    </div>
  )
}

export default AdminScreen