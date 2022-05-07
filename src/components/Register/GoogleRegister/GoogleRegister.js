import React, { useState } from 'react';
import google from '../../../images/Logo/Google.png';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../../firebase.init';

// const auth = getAuth();

const GoogleRegister = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch()
    }
    return (
        <div>
            <div className='d-flex align-items-center w-50 m-auto'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                {
                    user.email ?
                        < button onClick={handleSignOut}>Sign out</button>


                        :
                        <button onClick={handleGoogleSignIn} className='btn btn-info  d-block mx-auto'>
                            <img src={google}></img>
                            <span className='px-2'>Google Sign In</span> </button>
                }

                <h2>{user.displayName}</h2>

            </div>

        </div >
    );
};

export default GoogleRegister;