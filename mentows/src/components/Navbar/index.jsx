import React from 'react';
import mentows_logo from './assets/mentows_logo.png';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink style={{fontStyle: 'bold', fontSize:'70px', fontFamily: 'Gill Sans'}} to='https://github.com/Keiaus/Mentows' activeStyle>
                        <a href='' className='mentows_logo'><img className='mentows_logo' src={mentows_logo}></img></a>                    
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/downloads' activeStyle>
                        Downloads
                    </NavLink>
                    <NavLink to='/topics' activeStyle>
                        Topics
                    </NavLink>
                    <NavLink to='/documentation' activeStyle>
                        Docs
                    </NavLink>
                    <NavLink style={{marginLeft: '300px'}} to='/login' activeStyle>
                        Log In
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;