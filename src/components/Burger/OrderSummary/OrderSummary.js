import React from 'react';

import Button from '../../UI/Button/Button.js'

const OrderSummary =(props)=>{
    let ingr = Object.keys(props.ingredients)
                .map(igKey=>{
                    return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>;
                })
    return(
  <div>
  <h3>Your Order having the ingredients in BURGER.</h3>
       {ingr}
       <p>Total Price : {props.price.toFixed(2)} </p>
       <Button btnType="Danger" clicked={props.purchaseContinue}>Continue</Button>
       <Button  btnType="Success" clicked={props.purchaseCancel}>Cancel</Button>
  </div>
    );

}
export default OrderSummary;
