import React, {} from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector } from 'react-redux';


const Header = () => {
  

  const cartstate = useSelector((state) => state.cart)

  const getstate = useSelector(state => state.Login)
  const {currentUser} = getstate
 

  const logoutHandler = () => {
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }

  

 return (
  <header>
  <Navbar bg="light" expand="lg" collapseOnSelect>
<Container>
<LinkContainer to='/'>
<Navbar.Brand>SmartShop</Navbar.Brand>
</LinkContainer>

<Navbar.Toggle aria-controls="basic-navbar-nav" />

<Nav className="ml-auto">
<LinkContainer to='/cart'><Nav.Link><i className='fas fa-shopping-cart'></i><button type="button" className="btn btn-primary">
  Cart <span className="badge badge-light">{cartstate.cartItems.length}</span>
</button></Nav.Link></LinkContainer>
  

 
 {currentUser ? <Dropdown style={{paddingTop:'8px'}}>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    {currentUser.name}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/orders">orders</Dropdown.Item>
    <Dropdown.Item onClick={logoutHandler} href="/login">Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>: (<LinkContainer to='/login'><Nav.Link><i className='fas fa-user'></i>Sign in</Nav.Link></LinkContainer>
 )}
 

</Nav>
</Container>
</Navbar>
</header>
)
}




  
export default Header;
