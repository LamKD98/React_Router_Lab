import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Items from './components/Items';
import Basket from './components/Basket';
import NavBar from './components/NavBar';


const App = () =>{


  const [potions, setPotions] = useState([
    {name:"Strength", cost: 100},
    {name:"Agility", cost: 70},
    {name:"Mana", cost: 20},
    {name:"Stealth", cost: 500}
  ])

  const [basket, setBasket] = useState([])

  const addToBasket = (item) => {
    const updatedBasket = [...basket, item]
    setBasket(updatedBasket)
  }
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items' element={<Items potions={potions} addToBasket = {addToBasket}/>}/>
        <Route path='/basket' element={<Basket basket={basket}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
