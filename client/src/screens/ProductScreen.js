import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Rating from '../components/Rating';
import {Row, Col, ListGroup, Card, Button, Image, Form} from 'react-bootstrap'
import Loader from '../components/Loader'
import { listProductsDetail } from '../actions/productDetailActions';

const ProductScreen = () => {
    const [qty, setQty] = useState(1)
   // const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const productlist = useSelector(state => state.productDetail)

    const {loading, error, product} = productlist


 useEffect(() => {
     dispatch(listProductsDetail(id))
 }, [dispatch, id])


 const cartHandler = () => {
     navigate(`/cart/${id}?qty=${qty}`)

 }



  return <>
          <Link to='/' className='btn btn-dark my-3'>Go Back
         </Link> 
         {loading ? <Loader /> : error ? <h2>{error}</h2> : 
          <Row>
          <Col md={6}>
            <Image src={product.image} alt= 'products' fluid/>
          </Col>
          <Col md={3}>
              <ListGroup>
                  <ListGroup.Item variant='flush'>
                      <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                     {/*<Rating value={product.rating} text={`${product.numReviews} Reviews`} /> */}
                  </ListGroup.Item>
                  <ListGroup.Item>
                      price: &#8377; {product.price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                      Description : {product.description}
                  </ListGroup.Item>
              </ListGroup>
              </Col>
              <Col md={3}>
                  <Card>
                  <ListGroup variant='flush'>
                       <ListGroup.Item>
                           <Row>
                               <Col>price:
                               </Col>
                               <Col><strong>&#8377;{product.price}</strong>
                               </Col>
                           </Row>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <Row>
                               <Col>Status:
                               </Col>
                               <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                               </Col>
                           </Row>
                       </ListGroup.Item>

                       {product.countInStock > 0 && (
                                  <ListGroup.Item>
                                      <Row>
                                          <Col>
                                          Qty:</Col>
                                          <Col>
                                          <Form.Control as='select'   value={qty} onChange={(e) => setQty(e.target.value)}>
                                           {
                                               [...Array(product.countInStock).keys()].map(x => (
                                                   <option  key={x + 1} value={x+1}>{x+1}</option>
                                               ))
                                               }
                                          </Form.Control>
                                          </Col>
                                      </Row>
                                  </ListGroup.Item>
                              )}





                       <ListGroup.Item>
                         
                        <Button onClick={cartHandler} className='btn-block' type='button' disabled={product.countInStock === 0}>
                          Add To Cart
                        </Button>
                       
                          
                       </ListGroup.Item>
                  </ListGroup>
                  </Card>
              </Col>
      </Row> 
      }
        
  </>;
};

export default ProductScreen;
