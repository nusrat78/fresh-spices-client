import React, { useState } from 'react';
import './EmailRegister.css';
import app from '../../../firebase.init';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';

const auth = getAuth(app);


const EmailRegister = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleFormSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        setValidated(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                console.error(error);
            })
        event.preventDefault();
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='form-header'>Please Register</h2>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default EmailRegister;