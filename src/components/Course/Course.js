import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import {Container, Row, Col ,CardGroup,Card,Button} from 'react-bootstrap';
import './Course.css';
const Course = (props) => {
 const {imgUrl, title, description, author, price } =props.course;
   const addCart=props.cartHandler;
  return (
  //  <div  className='card-style '>
  
  <CardGroup>
  <Card className='card d-flex myCard'>
 
  <Card.Img  variant="top" src={imgUrl} alt={title}/>
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text><small>{description}</small> </Card.Text>
  <Card.Text><small>Created by :{author}</small> </Card.Text>
  <Card.Title>${price}</Card.Title>
  <Button variant="primary" onClick={()=> addCart(props.course) }>Enroll Now</Button>
</Card.Body>

</Card>
</CardGroup>
 








  
  );
};

export default Course;
