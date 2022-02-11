import React, {useEffect} from 'react'
import Loader from '../components/Loader'
import Error from '../components/Error'
import {useDispatch, useSelector} from 'react-redux'
import { getAllusers, Deleteuser } from '../actions/userActions'

const AdminUserslist = () => {
  const dispatch = useDispatch()
  const userstate = useSelector((state) => state.getallusersReducers)
  const {error, loading, users} = userstate

  useEffect(() => {
           dispatch(getAllusers())
  }, [])
  return (
    <div>
        <h1>Users List</h1>
        {loading && (<Loader />)}
      {error && <Error error='something went wrong'/>}
        <table className='table'>
          <thead>
            <tr>
              <th>user Id</th>
              <th>Email</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map(user => {
              return <tr>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>
                  <i className='fa fa-trash' onClick={() => {dispatch(Deleteuser(user._id))}}></i>
                </td>
              </tr>
            })}
          </tbody>

        </table>

    </div>
  )
}

export default AdminUserslist