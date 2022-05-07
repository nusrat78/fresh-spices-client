import React from 'react';
import EmailLogin from '../EmailLogin/EmailLogin';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    return (
        <div>
            <EmailLogin></EmailLogin>
            <GoogleLogin></GoogleLogin>
        </div>

    );
};

export default Login;