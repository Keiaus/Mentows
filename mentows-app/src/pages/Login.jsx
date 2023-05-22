import React from 'react';

const Login = () => {

    return (
        <div>
            <title>
                Login | Mentows
            </title>
            <div id='style-container' style={{ height: '500px', width: '500px', backgroundColor: 'whitesmoke', margin: 'auto', borderRadius: '3%', marginTop: '50px' }}>
                <div id='container' style={{ textAlign: 'center', marginTop: '100px' }}>
                    <h1 style={{ textAlign: 'center', paddingTop: '50px', color: 'black' }}>Log in</h1>
                    <form id='username-form'>
                        <input type="text" name="username" placeholder='Username' id="username" style={{ height: '40px', width: '340px', fontSize: '20px', marginTop: '50px' }} />
                    </form>
                    <br />
                    <form id='password-form'>
                        <input type="password" name="password" placeholder='Password' id="password" style={{ height: '40px', width: '340px', fontSize: '20px' }} />
                    </form>
                    <br />
                    <br />
                    <form id='login-form'>
                        <button id='submit' style={{ height: '40px', width: '150px', fontSize: '20px', marginTop: '25px', borderRadius: '3%' }}>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;