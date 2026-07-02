import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { Link } from 'react-router';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
 
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setError('');
        setSuccess(false)

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result);
       
            if(!result.user.emailVerified){
                alert("please check your email and ensure is this you")
            }
            else{
     setSuccess(true)
            }
            
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
            
        })
        
    }
    return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-3xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>New to this website ? please <Link className='text-blue-800 underline' to={'/register'}>Register</Link> </p>
        {
            error && <p className='text-red-700 '>{error}</p>
        }
        {
            success && <p className='text-green-800'>{'user login success ful'}</p>
        }
      </div>
    </div>
    );
};

export default Login;