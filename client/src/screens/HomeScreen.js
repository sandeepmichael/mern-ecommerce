import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product'
import { Row, Col, } from 'react-bootstrap';
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Filter from '../components/Filter';

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList
  
  useEffect(() => {
       
       dispatch(listProducts())
        
  }, [dispatch])
    
      

  return <>
        <Filter />
         <h1>Latest products</h1>
         {loading ? <Loader /> : error ? <h1>{error}</h1> :  <Row>
             
             {products.map((product) => {
                 return <Col sm={12} md={6} lg={4} xl={3}>
                 <Product key={product._id} product={product}/>
                 </Col>
             })}
           
         </Row>}
        



  </>;
};

export default HomeScreen;
