'use client'
import React, { useState } from 'react';
import './login.css'
import { useRouter } from 'next/navigation';
import  Link  from "next/link";
import Header from "../component/header/Header";
import { useStateValue } from "../component/context/StateProvider";
import { auth } from "../component/database/firebase";


function Login() {
    const router = useRouter();
    const [{}, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {

                dispatch({
                    type: 'SET_USER',
                    user: auth.user, // Assuming `auth` contains the user object
                });

                router.push('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    dispatch({
                        type: 'SET_USER',
                        user: auth.user,
                    });
                    router.push('/');
                }
            })
            .catch(error => alert(error.message))
    }

    return (<>
    <Header />
        <div className='login'>
        <br/>
        <br/>
        <br/>
            <Link href='/'>
                <img
                    className="login__logo"
                    src='../image/oklao-logo-login.png' 
                />
            </Link>

           

            <div className='login__container'>

                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the OKLAO Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Account</button>
            </div>
        </div>
        </>
    )
}

export default Login