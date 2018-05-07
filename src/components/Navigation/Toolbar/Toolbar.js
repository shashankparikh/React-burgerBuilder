import React from 'react';

// import Logo from '../../Logo/Logo.js'
import NavigationItems from '../Navigationitems/Navigationitems.js'
import './Toolbar.css';
const Toolbar =(props)=>{
    return(

        <header className='Toolbar'>
            <div>
                MENU
            </div>
           {/* <Logo/> */}
            <nav>
               <NavigationItems/>
                </nav>
        </header>

    );

}
export default Toolbar;