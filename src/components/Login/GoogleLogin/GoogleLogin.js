import React from 'react';
import google from '../../../images/Logo/Google.png'

const GoogleLogin = () => {
    return (
        < div >
            <div className='d-flex align-items-center w-50 m-auto'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info  d-block mx-auto'>
                    <img src={google}></img>
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>

        </div >
    );
};

export default GoogleLogin;