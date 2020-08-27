import React from "react";
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import {Navbar, Dropdown, Card,ListGroup, Button} from 'react-bootstrap';

function Cart(props) {
 const cart = props.cart;

  let itemPrice=cart.reduce((sum, item) => sum + item.price, 0);;

const FormatNumber =num => {
  const precision=num.toFixed(2);
  return Number(precision);
}

return (
  <>
  <Navbar className='navber fixed-top' bg="dark" >
    <h1 style={{color:'white'}}>E-Course</h1>
    <Dropdown className="ml-auto">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <h4 style={{color:"white"}}><FontAwesomeIcon icon={faCartArrowDown} /> {cart.length}</h4>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item>
    <Card style={{ width: '18rem', marginLeft:'-250px' }}>
  <ListGroup variant="flush">
    <ListGroup.Item> <p>Item added : {cart.length}</p></ListGroup.Item>
    <ListGroup.Item> <p> Total price: {FormatNumber(itemPrice)}</p></ListGroup.Item>

    <Button variant="primary" >Proceed to Checkout</Button>
  </ListGroup>
</Card>
    </Dropdown.Item>
 
  </Dropdown.Menu>
</Dropdown>
   </Navbar>

 
</>
    
  );
}

export default Cart;


