import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Information from '../Information';
import Course from "./Course/Course";
import Cart from "./Cart/Cart";

function App() {
 const [cart, setCart] = useState([]);
 const cartHandler=(course)=>{
   const newCart=[...cart, course];
   setCart(newCart);
 }

return (
    <div>
    <div>
    
    <Cart cart={cart}></Cart>
    
    </div>
    <div  className="App">
    {Information.map(courseInfo => <Course course={courseInfo} key={courseInfo.id}  cartHandler={cartHandler} /> )}
    </div>
    
    </div>
  );
}

export default App;
