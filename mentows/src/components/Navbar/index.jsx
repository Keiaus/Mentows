import React from 'react';

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
                    <NavLink style={{fontStyle: 'italic', fontSize:'70px', fontFamily: 'Gill Sans'}} to='https://github.com/Keiaus/Mentows' activeStyle>
                        M
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