import React from 'react';

const Basket = ({basket}) => {

    const listItems = basket.map((potion,index)=>{
        return <li key={index}>{potion.name}: {potion.cost} gold</li>
    })
    return ( 
        <>
        {listItems}
        </>
     );
}
 
export default Basket;