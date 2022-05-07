import React, { useState } from 'react';
import app from '../../../firebase.init';
import { Button, Form } from 'react-bootstrap';
import './EmailLogin.css'
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';


const auth = getAuth(app);

const EmailLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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



        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
        event.preventDefault();
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('email verification sent')
            })
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='form-header'>Please Login</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handlePasswordReset} variant="link">Forgot Password?</Button>
                <br></br>
                <p>{error}</p>
                <Button variant="primary" type="submit" className='d-block mx-auto'>
                    Login
                </Button>
            </Form>
            <p>New to Fresh spices? <Link to="/register" className='text-danger'>Please Register</Link></p>
        </div>

    );
};

export default EmailLogin;