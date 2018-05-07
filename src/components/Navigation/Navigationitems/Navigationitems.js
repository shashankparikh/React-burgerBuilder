import React from 'react';

import './Navigationitems.css';
import NavigationItem from './Navigationitem/Navigationitem.js';

const navigationitems = (props)=>{
    return(
    
 <ul className='NavigationItems'>
<NavigationItem link="/">Burger Builder</NavigationItem>
<NavigationItem link="/">Checkout</NavigationItem>
    </ul>
    );
}

export default navigationitems;