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
                    <NavLink to='/login' activeStyle>
                        Log In
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;