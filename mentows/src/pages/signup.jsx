import React from 'react';

const SignUp = () => {
    
    return (
        <head>
            <title>
                Signup
            </title>
            <div id='style-container' style={{height:'500px', width:'500px', backgroundColor:'#007FFF', margin:'auto', borderRadius:'10%'}}>
                    <div id='container' style={{textAlign:'center', marginTop:'100px'}}>
                        <h1 style={{textAlign:'center', paddingTop:'50px'}}>Signup</h1>
                        <input type="text" name="username" placeholder='Username' id="username" style={{height:'40px', width:'340px', fontSize:'30px', marginTop:'50px'}}/>
                        <br />
                        <br />
                        <input type="password" name="password" placeholder='Password' id="password" style={{height:'40px', width:'340px', fontSize:'30px'}}/>
                        <br />
                        <br />
                        <button id='submit' style={{height:'40px', width:'150px', fontSize:'30px', marginTop:'100px'}}>Signup</button>
                    </div>
                </div>
        </head>
    );
};

export default SignUp;