import React from 'react';

const Login = () => {
    
    return (
        <div>
            <title>
                Login
            </title>
                <div id='style-container' style={{height:'500px', width:'500px', backgroundColor:'#007FFF', margin:'auto', borderRadius:'3%'}}>
                    <div id='container' style={{textAlign:'center', marginTop:'100px'}}>
                        <h1 style={{textAlign:'center', paddingTop:'50px'}}>Login</h1>
                        <input type="text" name="username" placeholder='Username' id="username" style={{height:'40px', width:'340px', fontSize:'30px', marginTop:'50px'}}/>
                        <br />
                        <br />
                        <input type="password" name="password" placeholder='Password' id="password" style={{height:'40px', width:'340px', fontSize:'30px'}}/>
                        <br />
                        <br />
                        <button id='submit' style={{height:'40px', width:'150px', fontSize:'30px', marginTop:'100px'}}>Login</button>
                    </div>
                </div>
        </div>
    );
};

export default Login;