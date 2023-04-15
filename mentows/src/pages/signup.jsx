import React, { useState } from 'react';
import SignupForm from '../components/Signup/SignupForm';

const SignUp = () => {
    const [isRegister, setIsRegister] = useState(false);
    const registerHandler = (result) => {
        setIsRegister(result)
    }
    return (

        <>
            <SignupForm isRegister={registerHandler} />
            {
                // question mark = then, colon = else
                isRegister ?
                    <div><p>Welcome</p></div>
                    : <></>

            }
        </>
    );
};

export default SignUp;