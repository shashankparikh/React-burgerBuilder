import React from 'react';

import './BuildControls.css';

import BuildControl from './BuildControl/BuildControl.js';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},

];

const buildControls =(props) =>{
return(
    <div className='BuildControls'>
   <strong> <p>Current Price: {props.price.toFixed(2)}</p></strong>
        {controls.map(ctrl=>(
            <BuildControl key = {ctrl.label} label={ctrl.label} type={ctrl.type} 
            added={()=>props.ingrediantAdded(ctrl.type)}
            removed ={()=>props.ingrediantRemoved(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}/>
        ))}
        <button className='OrderButton'
                disabled ={!props.purchasable}
                onClick = {props.ordered} >Order Now</button>
    </div>
);
}

export default buildControls;