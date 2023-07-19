import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import './Teacher_Signup.css';

function Teacher_Signup() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('')
    let navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            alert('비밀번호가 서로 다릅니다!');
            return;
        }

        const API_URL = 'API_URL';

        try {
            const response = await axios.post(API_URL, {
                id,
                name,
                password,
                email,
            });

            if (response.status === 200) {
                alert('회원가입 되었습니다!');
                setId('');
                setName('');
                setPassword('');
                setPasswordConfirm('');
                setEmail('');
                navigate('/login')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error(error);
            alert('Error');
        }
    }

    return (
        <div className="signup-page">

            <div className="signup-page">
                <form className="signup-form" onSubmit={handleSignup}>
                    <h2>Teacher Sign Up</h2>
                    <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required/>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <input type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required/>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Teacher_Signup;
