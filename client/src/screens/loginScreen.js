import React, { useState, useEffect } from 'react'
import { Link,   } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/formContainer'
import Google from '../components/Google'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const user = {
    email, 
    password
  }

 

  
 
  const dispatch = useDispatch()

  const getstate = useSelector(state => state.Login)
  const {loading,  error} = getstate

  useEffect(() => {
    if(localStorage.getItem('currentUser')){
      window.location.href = '/'
    }
  })

 

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(user))
  
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
          <hr />
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
         <hr />
     { /* <Google /> */ }

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={ '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen