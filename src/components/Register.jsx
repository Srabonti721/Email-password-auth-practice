import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { terminate } from 'firebase/data-connect';
import { Link } from 'react-router';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password);
        if (!terms) {
            setErrorMessage('please accept terms and condition');
            return
        }
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

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setSuccess(true)
                        alert("we sent a verification email . please check your email ")
                    })
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
                    <div className='relative'>
                        <input name='password' type={showPassword ? 'text' : 'password'} className="input" placeholder="Password" />
                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-sm absolute top-2 right-8'>{showPassword ? <FaEyeSlash /> : <FaEye />} </button>
                    </div>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <label>
                        <input name='terms' type="checkbox" className="checkbox" /> please accept terms and condition
                    </label>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Already have an account ? please <Link className='text-blue-800 underline' to={"/login"}>Login</Link></p>
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