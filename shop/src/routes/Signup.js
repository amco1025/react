import React, { useState } from 'react';
import './Signup.css';
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [role, setRole] = useState('');
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
                role
            });

            if (response.status === 200) {
                alert('회원가입 되었습니다!');
                setId('');
                setName('');
                setPassword('');
                setPasswordConfirm('');
                setRole('');
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
            <div className='title'>
                <Link to="/">
                    <h1>Solo Live</h1>
                </Link>
            </div>

            <div className="signup-page">
                <form className="signup-form" onSubmit={handleSignup}>
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required/>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <input type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required/>
                    <div className="radio-group">
                        <label>
                            <input type="radio" value="student" checked={role === 'student'} onChange={(e) => setRole(e.target.value)} />
                            Student
                        </label>
                        <label>
                            <input type="radio" value="teacher" checked={role === 'teacher'} onChange={(e) => setRole(e.target.value)} />
                            Teacher
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
