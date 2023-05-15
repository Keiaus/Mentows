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
                        Home
                    </NavLink>
                    <NavLink to='/About' >
                        About
                    </NavLink>
                    <NavLink to='/Downloads' >
                        Downloads
                    </NavLink>
                    <NavLink to='/Topics'>
                        Topics
                    </NavLink>
                    <NavLink to='/Documentation' >
                        Docs
                    </NavLink>
                    <div style={{ position: 'absolute', right: '0', marginRight: '10px' }}>
                        <NavLink to='/Login' >
                            Log in
                        </NavLink>
                    </div>
                    <div style={{ position: 'absolute', right: '0', marginRight: '100px' }}>
                        <NavLink to='/Signup' >
                            Sign up
                        </NavLink>
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;