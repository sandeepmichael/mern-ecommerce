import React, {useEffect} from 'react'
import {Link,  useLocation, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
//import Message from '../components/Message'
import {Row, Col, Image, ListGroup, Button, Card, Form} from 'react-bootstrap'
import {addToCart, removeFromCart} from '../actions/cartActions'
import Checkout from '../components/stripeCheckout'

const CartScreen = () => {
    const params = useParams()
   
    const location = useLocation()
    const productId = params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

const dispatch = useDispatch()

const cart = useSelector(state => state.cart)

const {cartItems} = cart


useEffect(() => {
    if(productId) {
        dispatch(addToCart(productId, qty))
    } 
}, [dispatch, productId, qty])

const removeFromCartHandler = (id) => {
 dispatch(removeFromCart(id))
}




    return (
        <Row>
            <Col md={8}>
            {cartItems.length === 0 ? <Link to='/'>Go Back</Link> : (
             <ListGroup variant='flush'>
                 {cartItems.map(item => (
                     <ListGroup.Item key={item.product}>
                         <Row>
                             <Col md={2}>
                                 <Image src={item.image} alt={item.name} fluid rounded />
                                 </Col>
                                 <Col md={3}>
                                     <Link to={`/products/${item.product}`}>{item.name}</Link>
                                 </Col>
                                 <Col md={2}>&#8377;{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                 }</Col>
                                 <Col md={2}>
                                 <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart
                                    (item.product, Number(e.target.value)))}>
                                           {
                                               [...Array(item.countInStock).keys()].map(x => (
                                                   <option key={x + 1} value={x+1}>{x+1}</option>
                                               ))
                                               }
                                          </Form.Control>
                                 </Col>
                                 <Col md={2}>
                                     <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                                     <i className='fas fa-trash'></i>
                                     </Button>
                                 
                                 </Col>
                                 

                         </Row>
                     </ListGroup.Item>
                 ))}
             </ListGroup>
            )}
            </Col>
            <Col md={4}>
                 <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                     <h2>subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                     &#8377;{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {/*  <Button type='button' className='btn-block' disabled={cartItems.length === 0}
                            ></Button> */}
                            <Checkout price={cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}/>
                        </ListGroup.Item>
                       

                    </ListGroup>
                  </Card>

            </Col>
         
        </Row>
    )
}

export default CartScreen
