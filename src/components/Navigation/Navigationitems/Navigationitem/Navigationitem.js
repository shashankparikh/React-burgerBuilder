import React from 'react';

import './Navigationitem.css';
const navigationitem = (props)=>{
    return(

    <li className="NavigationItem"><a href={props.link}>{props.children}</a></li>
);
}
export default navigationitem;

