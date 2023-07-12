// useState 사용해보기
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div className="App">
            <h1>Hello {item}</h1>
            <h2>Start editing to see some magic happend!</h2>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
        </div>
    );
};