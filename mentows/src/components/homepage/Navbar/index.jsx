import React from 'react';

import {
    Nav,
    NavLink,
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
                    <NavLink style={{paddingLeft:'240px'}} to='/login' activeStyle>
                        Login
                    </NavLink>
                    <NavLink to='/signup' activeStyle>
                        Signup
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;