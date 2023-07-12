<!-- useInput -->
<!-- useInput은 기본적으로 input을 업데이트 해줌 -->

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = event => {
        console.log(event.target)
    };
    return { value, onChange };

};

const App = () => {
    const name = useInput("Mr.");
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder = "Name" value={...name} />
        </div>
    );
};