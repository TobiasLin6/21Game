import React, { useState } from 'react';
import Numbers from './Numbers';
import Refresh from './Refresh';
import InputBar from './InputBar';
import { Calc } from '../functions/Calc';

const ops = ['+', '-', '*', '/'];
const par = ['(', ')'];

function App() {

    const [val1, _1] = useState(randInt());
    const [val2, _2] = useState(randInt());
    const [val3, _3] = useState(randInt());
    const [val4, _4] = useState(randInt());

    const [disable1, setDisable1] = useState(false);
    const [disable2, setDisable2] = useState(false);
    const [disable3, setDisable3] = useState(false);
    const [disable4, setDisable4] = useState(false);

    const vals = [String(val1), String(val2), String(val3), String(val4)];

    const [solution, setSolution] = useState("");
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    let random = Math.random()
    function randInt() {
        return Math.floor(Math.random() * 10) + 1;
    }
 
    function btnClicked(id, num) {

        // Set Selector Panel
        document.querySelectorAll(".selector-panel").forEach((div) => div.innerHTML = "")
        let selector = "<div><button id='add'>+</button><button id='sub'>-</button><button id='mul'>*</button><button id='div'>/</button><button id='lpar'>&#40;</button><button id='rpar'>&#41;</button></div>";
        document.getElementById(id).innerHTML = selector;
        setSolution(prev => {
            if (ops.includes(prev.slice(-1)) || par.includes(prev.slice(-1)) || prev === "") {
                return prev + num;
            } else if (vals.includes(prev.slice(-1))) {
                return prev.slice(0, -1) + num;
            } else {
                return prev;
            }
            
        });

        // Handle operations
        document.getElementById("add").addEventListener('click', function () {
            setSolution(prev => {
                if (ops.includes(prev.slice(-1))) {
                    return prev.slice(0, -1) + "+";
                } else if (prev.slice(-1) === "(") {
                    return prev;
                } else {
                    return prev + "+";
                }
            });
        });
        document.getElementById("sub").addEventListener('click', function () {
            setSolution(prev => {
                if (ops.includes(prev.slice(-1))) {
                    return prev.slice(0, -1) + "-";
                } else if (prev.slice(-1) === "(") {
                    return prev;
                } else {
                    return prev + "-";
                }
            });
        });
        document.getElementById("mul").addEventListener('click', function () {
            setSolution(prev => {
                if (ops.includes(prev.slice(-1))) {
                    return prev.slice(0, -1) + "*";
                } else if (prev.slice(-1) === "(") {
                    return prev;
                } else {
                    return prev + "*";
                }
            });
        });
        document.getElementById("div").addEventListener('click', function () {
            setSolution(prev => {
                if (ops.includes(prev.slice(-1))) {
                    return prev.slice(0, -1) + "/";
                } else if (prev.slice(-1) === "(") {
                    return prev;
                } else {
                    return prev + "/";
                }
            });
        });
        document.getElementById("lpar").addEventListener('click', function () {
            setSolution(prev => {
                const [newStart, newEnd] = checkParenthesis(prev + "(");
                setStart(newStart);
                setEnd(newEnd);
                return prev + "("
            });
        });
        document.getElementById("rpar").addEventListener('click', function () {
            setSolution(prev => {
                if (ops.includes(prev.slice(-1)) || prev.slice(-1) === "(") {
                    return prev
                } else {
                    const [newStart, newEnd] = checkParenthesis(prev + ")");
                    setStart(newStart);
                    setEnd(newEnd);
                    return prev + ")";
                }
            });
        });

    };

    //TODO: Fix this for the edge case of )(
    function checkParenthesis(input) {
        let numLeft = 0;
        let numRight = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === "(") {
                numLeft++;
            } else if (input[i] === ")") {
                numRight++;
            }
        }
        console.log(`left: ${numLeft} right: ${numRight}`)

        if (numLeft === numRight) {
            console.log("1");
            return ["", ""];
        } else if (numLeft < numRight) {
            console.log("2");
            return ["(".repeat((numRight - numLeft)), ""];
        } else {
            console.log("3");
            return ["", ")".repeat((numLeft - numRight))];
        }
    }

    // TODO: Check UI
    function handleUI() {

    }
    

    // TODO: Set function. Can call calc(). Make submit button component.
    function checkAns() {

    }

    return (
        <main>
            <h1>21 Game Prototype 1</h1>
            <Numbers btnclicked={btnClicked} elementId="1" val={val1} disablebtn={setDisable1} disable={disable1} />
            <Numbers btnclicked={btnClicked} elementId="2" val={val2} disablebtn={setDisable2} disable={disable2} />
            <Numbers btnclicked={btnClicked} elementId="3" val={val3} disablebtn={setDisable3} disable={disable3} />
            <Numbers btnclicked={btnClicked} elementId="4" val={val4} disablebtn={setDisable4} disable={disable4} />

            <Refresh />

            <InputBar vals={vals} value={solution} setvalue={ setSolution } calc={Calc(start + solution + end)} start={start} end={end} disable1={setDisable1} disable2={setDisable2} disable3={setDisable3} disable4={setDisable4} />

        </main>
        
    ) 
}
// start + solution + end

export default App;
