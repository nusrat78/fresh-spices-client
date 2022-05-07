import React from 'react';
import logo from '../../images/Logo/logo.png';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Headers = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark" bg='success'>
            <Container>
                <img height={80} src={logo} alt=""></img>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">
                            Blog
                        </Nav.Link>
                        {
                            user ?
                                <button onClick={handleSignOut}>Sign out</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>

                        }


                        <Nav.Link as={Link} to="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Headers;