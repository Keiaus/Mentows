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
                    <NavLink to='https://github.com/Keiaus/Mentows' target={'_blank'}>
                        <img src={"./src/assets/Mentows3.png"} alt="" className='mentows_logo' style={{ height: '120px', width: '200px' }} />
                    </NavLink>
                    <NavLink to='/Home' >
                        <p style={{ fontSize: '20px' }}>Home</p>
                    </NavLink>
                    <NavLink to='/About' >
                        <p style={{ fontSize: '20px' }}>About</p>
                    </NavLink>
                    <NavLink to='/Downloads' >
                        <p style={{ fontSize: '20px' }}>Downloads</p>
                    </NavLink>
                    <NavLink to='/Topics'>
                        <p style={{ fontSize: '20px' }}>Topics</p>
                    </NavLink>
                    <NavLink to='/Documentation' >
                        <p style={{ fontSize: '20px' }}>Documentation</p>
                    </NavLink>
                    <div style={{ position: 'absolute', right: '0', marginRight: '10px' }}>
                        <NavLink to='/Login' >
                            <p style={{ fontSize: '20px' }}>Log in</p>
                        </NavLink>
                    </div>
                    <div style={{ position: 'absolute', right: '0', marginRight: '100px' }}>
                        <NavLink to='/Signup' >
                            <p style={{ fontSize: '20px' }}>Sign up</p>
                        </NavLink>
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;