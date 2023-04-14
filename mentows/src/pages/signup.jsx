import React, { useState } from 'react';
import SignupForm from '../components/Signup/SignupForm';

var signupVar = document.getElementById('signup-data')
signupVar.addEventListener('click', nextclicked(){
    
});

const SignUp = () => {
    const [isRegister, setIsRegister] = useState(false);
    const registerHandler = (result) =>{
        setIsRegister(result)
    }
    return (
        
        <>
            <SignupForm isRegister = {registerHandler}/>
            {
                // question mark = then, colons = else
                isRegister ? 
                
                : <></>
                
            }
        </>
    );
};

export default SignUp;