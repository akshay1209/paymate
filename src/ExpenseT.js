import React, { useState } from 'react'
import './App.css';

const ExpenseT = () => {
    const [input, setInput] = useState("");
    const [inarr, setInarr] = useState([]);
    const [balance, setBalance] = useState(""); 

    const addition = () => {
        if (!input) {
            alert("please enter some values");
        }
        else if(balance>0 || balance === 0) {
            setInarr([...inarr, input])
            setBalance(balance + input)
        }
    }
    const subtract = () => {
        if (!input) {
            alert("please enter some values");
        }
        else if(balance>0 || balance === 0) {
            setInarr([...inarr, input])
            setBalance(balance - input)
        }
    }
    
//   const handelDate = () =>{
//     let dt = new Date().toLocaleDateString();
//     setDate(dt);
//   }

    return (
        <div id="app">
            <h1>EXPENSE TRACKER - BASIC</h1>
            <section id='inputSec'>
                <div>
                    <h3>Balance: {balance} </h3>
                    <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
                    <br />
                    <button onClick={addition}>Add</button>
                    <button onClick={subtract}>Remove</button>
                </div>
            </section>
            <section>
                <h2>Transactions:</h2>
                {inarr.map((value, index) => {
                    return (
                        <p key={index}>{value}</p>
                    )
                })}
            </section>
        </div>
    )
}

export default ExpenseT;
