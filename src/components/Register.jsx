import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters.');
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage('Password must be 1 Upper case');
            return
        }
        if (!/[a-z]/.test(password)) {
            setErrorMessage('Password must be 1 lower case');
            return
        }
        if (!/\d/.test(password)) {
            setErrorMessage('Password must be 1 number case');
            return
        }


        setErrorMessage('');
        setSuccess(false);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)

            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message)
            })

    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                {
                    errorMessage && <p className='text-red-400'>{errorMessage}</p>
                }
                {
                    success && <p className='text-green-600'>user register successfully</p>
                }
            </div>
        </div>
    );
};

export default Register;