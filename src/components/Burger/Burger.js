import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './Burgeringrediant/Burgeringrediant.js'
const burger =(props)=>{

    let transformedIngredients = Object.keys(props.ingredients)   // geeting the key and converting from  object to array
                                   .map(ingredientKey =>{
                                       console.log(ingredientKey)   // key
                                       console.log(Array(props.ingredients[ingredientKey])) //array having the no. of elements value doesn't matter
                                       return [...Array(props.ingredients[ingredientKey])].map((_,i)=>{
                                          return  <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>;
                                       });
                                   })
.reduce((arr,el)=>{    //The reduce() method reduces the array to a single value.
         return arr.concat(el)
    },[]);   
    console.log(transformedIngredients)
    console.log(transformedIngredients.length)
    if(transformedIngredients.length===0){
        transformedIngredients = <p>Please start adding some ingredients.</p>
    }

    return(
         <div className='Burger'>
         <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
         <BurgerIngredient type="bread-bottom"/>
        </div>
    );

}
export default burger;