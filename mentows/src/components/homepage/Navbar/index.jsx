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
                <NavMenu>
                    <NavLink to='https://github.com/Keiaus/Mentows' target={'_blank'} activeStyle>
                            <img src={"./src/assets/mentows_logo_mac.png"} alt="" className='mentows_logo' style={{height: '85px', width:'150px'}}/>
                    </NavLink>
                    <NavLink to='/home' activeStyle>
                        Home
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
                    <NavLink style={{marginLeft: '70px'}} to='/login' activeStyle>
                        Log In
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;