import React from 'react';
import Basket from './Basket';

const Items = ({potions ,addToBasket}) => {


    const handleClick = (event) =>{
     addToBasket(event)
    }
    const listItems = potions.map((potion,index)=>{
        return <li key={index}>{potion.name}: {potion.cost} gold <button onClick={() => {handleClick(potion)}}> Add to basket</button></li>
    })
    return (  
        <div>
            <h3>Potions</h3>
            <ul>{listItems} </ul>
        </div>
    );
}
 
export default Items;