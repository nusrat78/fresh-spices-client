import React from 'react';
import { Button } from 'react-bootstrap';
import EmailRegister from '../EmailRegister/EmailRegister';

const Register = () => {
    return (
        <div>
            <EmailRegister></EmailRegister>
            <Button variant="primary" type="submit">
                Register
            </Button>

        </div>
    );
};

export default Register;