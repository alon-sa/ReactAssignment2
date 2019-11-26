import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CCShop from './Components/CCShop';
// import CCItem from './Components/CCItem';
// import CCItems from './Components/CCItems';
// import CCItemsInCart from './Components/CCItemsInCart';
import { Item, itemsList } from './Item.js'

var itemsInCart = [];

function App() {
  
  return (
    <div className="App">
      <CCShop itemsList={itemsList} itemsInCart={itemsInCart}/>
    </div>
  );
}

export default App;
