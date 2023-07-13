import React, { useState } from 'react';
import './Login.css';
import { Routes, Route, Link, useNavigate, BrowerRouter as Router } from 'react-router-dom'
import Signup from './Signup.js'
import Log_data from './logData';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleChange = (event) => {
        if (event.target.name === "id") {
            setId(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = Log_data.find((user) => user.id === id && user.password === password);

        if (user) {
            console.log("로그인 되었습니다.")
            navigate('/')
        } else {
            alert("아이디 혹은 비밀번호가 틀립니다.")
        }
    }

    return (
        <div className="login-page">
            <div className='title'>
                <Link to="/">
                    <h1>Solo Live</h1>
                </Link>
            </div>

            <div className="login">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <hr style={{ border: 'none', height: '2px', backgroundColor: 'black' }} />
                    <input 
                        type="text"
                        name="id"
                        placeholder="ID"
                        onChange={handleChange}
                        value={id} 
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={password} 
                    />
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className="link-group">
                <Link to="/signup" className="signup-link">회원가입</Link>
                <span className="divider"> | </span>
                <a href="#" className="find-link">아이디 찾기</a>
                <span className="divider"> | </span>
                <a href="#" className="find-link">비밀번호 찾기</a>
            </div>
            
            <Routes>
                <Route path="/signup" element={ <Signup/>}/>
            </Routes>
        </div>
    );  
}

export default Login;
