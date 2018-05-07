import React from 'react';

import Aux from '../../hoc/Aux.js';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
const layout = (props) =>{
    var styl={
        marginTop:20
    }
    
    return(
    <Aux>
 {/* <div>Toolbar, Sidebar, Backdrop</div> */}
 <Toolbar/>
 <main className='mar'>
     {props.children}
 </main>
 </Aux>
    );
}

export default layout;