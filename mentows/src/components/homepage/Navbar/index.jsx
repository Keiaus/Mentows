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
                        <img src={"./src/assets/mentows_logo_mac.png"} alt="" className='mentows_logo' style={{ height: '85px', width: '150px' }} />
                    </NavLink>
                    <NavLink to='/Home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/About' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/Downloads' activeStyle>
                        Downloads
                    </NavLink>
                    <NavLink to='/Topics' activeStyle>
                        Topics
                    </NavLink>
                    <NavLink to='/Documentation' activeStyle>
                        Docs
                    </NavLink>
                    <div style={{ position: 'absolute', right: '0', marginRight: '10px' }}>
                        <NavLink to='/Login' activeStyle>
                            Log in
                        </NavLink>
                    </div>
                    <div style={{ position: 'absolute', right: '0', marginRight: '100px' }}>
                        <NavLink to='/Signup' activeStyle>
                            Sign up
                        </NavLink>
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;