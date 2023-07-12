import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

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
        navigate('/')
        console.log("로그인 되었습니다.");
        // 여기에 로그인 처리 로직을 작성합니다.
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <br></br>
                <hr></hr>
                <input 
                    type="text"
                    name="id"
                    placeholder="ID"
                    onChange={handleChange}
                    value={id} 
                />
                <br></br>
                <br></br>
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
    );
}

export default Login;
