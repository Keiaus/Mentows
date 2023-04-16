import { React, useState } from 'react';
import SignupForm from '../components/Signup/SignupForm';

const SignUp = () => {
    // const [isRegister, setIsRegister] = useState(false);
    const [confirmation, setConfirmation] = useState({});

    const handleConfirmation = (event) => {
        const { name, nameValue } = event.target;
        const { phone, phoneValue } = event.target;
        const { dob, dobValue } = event.target;
        setConfirmation(beforeConfirmation => ({ ...beforeConfirmation, [name]:nameValue, [phone]:phoneValue, [dob]:dobValue }))
    }

    return (
        <div>
            <SignupForm confirmation={confirmation} onConfirmation={handleConfirmation}/>
        </div>
    );
};

export default SignUp;