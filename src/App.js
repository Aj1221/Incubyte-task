import React, { useState } from 'react';
import { add } from './utils/stringCalculator';
import './App.css';


function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleCalculate = () => {
        try {
            setError(""); 
            const sum = add(input);
            setResult(sum);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="App">
            <h1>String Calculator</h1>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter numbers e.g. 1,2,3" 
            />
            <button onClick={handleCalculate}>Calculate</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {<p>Here is the Calculated Result: {result}</p>}
        </div>
    );
}

export default App;
