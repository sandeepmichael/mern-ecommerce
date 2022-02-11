
import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { FilterProducts } from '../actions/productActions';

const Filter = () => {
    const [searchkey, setSearchKey] = useState('')
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        setSearchKey(e.target.value)
    }


  return (
    <div>
        <div className='row justify-content-cneter'>
            <div className='col-md-4'>
               <input value={searchkey} type='text' className='form-control' placeholder='Search Products' onChange={inputHandler} />
            </div>
            <div className='col-md-2'>
                 <button className='btn btn-primary w-100' onClick={() => {dispatch(FilterProducts(searchkey))}}>Filter</button>
            </div>

        </div>


    </div>
  )
}

export default Filter