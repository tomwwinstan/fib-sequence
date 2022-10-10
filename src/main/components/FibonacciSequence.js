import React, {useState} from 'react';
import {fibonacciForDesiredSequence} from "../functions/ClassicFibonacci";
import FibonacciNumber from "./FibonacciNumber";

export default function FibonacciSequence() {

    const [fibSequence, setFibSequence] = useState([]);

    function getFibSequence() {
        let number = parseInt(document.getElementById("seq_number").value);
        if (number >= 0 || isNaN(number)) {
            setFibSequence(fibonacciForDesiredSequence(number));
            clearErrorMessage();
        } else {
            showErrorMessage("Please enter a positive number");
        }
    }

    function showErrorMessage(errorMessage) {
        document.getElementById("errorMsg").innerHTML = errorMessage;
    }

    function clearErrorMessage() {
        document.getElementById("errorMsg").innerHTML = "";
    }

    return (
        <main className="block">
            <h2>Fibonacci Sequence</h2>

            <p>
                Please enter a number for its Fibonacci Sequence
            </p>

            <label className="padding">Enter a number <input type="number" id="seq_number" onChange={getFibSequence} /></label>

            <p><span id="errorMsg" className="errorWording" /></p>

            <hr/>

            <div className="numberRow wrap">
                {fibSequence.map((number, i) => (
                    <FibonacciNumber key={"id" + i} number={number} />
                ))}
            </div>
        </main>
    )
}
