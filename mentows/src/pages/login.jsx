import React from 'react';

const Login = () => {
    
    return (
        <div>
            <title>
                Log In
            </title>
                <div id='style-container' style={{height:'500px', width:'500px', backgroundColor:'#007FFF', margin:'auto', borderRadius:'100%'}}>
                    <div id='container' style={{textAlign:'center'}}>
                        <h1 style={{textAlign:'center', marginTop:'100px'}}>Login</h1>
                        <input type="text" name="username" placeholder='Username' id="username" style={{marginTop:'100px', height:'40px', width:'340px', fontSize:'30px'}}/>
                        <br />
                        <br />
                        <input type="password" name="password" placeholder='Password'  id="password" style={{height:'40px', width:'340px', fontSize:'30px'}}/>
                        <br />
                        <br />
                        <button id='submit' style={{height:'40px', width:'150px', fontSize:'30px'}}>Submit</button>
                    </div>
                </div>
        </div>
    );
};

export default Login;