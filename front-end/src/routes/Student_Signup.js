import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Student_Signup.css';

function Student_Signup() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
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
            });

            if (response.status === 200) {
                alert('회원가입 되었습니다!');
                setName('');
                setId('');
                setPassword('');
                setPasswordConfirm('');
                navigate('/')
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error(error);
            alert('Error');
        }
    }

    return (
        <div>

            <div className="signup-page">
                <form className="signup-form" onSubmit={handleSignup}>
                    <h2>Student Sign Up</h2>

                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <input type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required/>
                    
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Student_Signup;
