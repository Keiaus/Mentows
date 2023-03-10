import React from 'react';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
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
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>
                        Log In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;