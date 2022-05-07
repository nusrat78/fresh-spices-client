import React from 'react';
import { Button } from 'react-bootstrap';
import EmailRegister from '../EmailRegister/EmailRegister';
import GoogleRegister from '../GoogleRegister/GoogleRegister';

const Register = () => {
    return (
        <div>
            <EmailRegister></EmailRegister>
            <GoogleRegister></GoogleRegister>

        </div>
    );
};

export default Register;