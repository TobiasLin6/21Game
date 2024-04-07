import React, { useState } from 'react';
import Numbers from './Numbers';
import Refresh from './Refresh';
import InputBar from './InputBar';

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

    let disabled = {};

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

        // TODO: Set disable buttons


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
                if (par.includes(prev.slice(-1))) {
                    return prev.slice(0, -1) + "(";
                } else {
                    return prev + "(";
                }
            });
            setEnd(prev => prev + ")");
        });
        document.getElementById("rpar").addEventListener('click', function () {
            setSolution(prev => {
                if (ops.includes(prev.slice(-1))) {
                    return prev
                } else if (prev.slice(-1) === "(") {
                    return prev;
                } else {
                    return prev + ")";
                }
            });
        });

    };


    //TODO: Fix this. start & end always read as 0 b/c they didn't get rerendered yet
    function checkParenthesis() {
        let numLeft = 0;
                    let numRight = 0;
                    for (let i = 0; i < prev.length; i++) {
                        if (prev.slice(i) === "(") {
                            numLeft++;
                        } else if (prev.slice(i) === ")") {
                            numRight++;
                        }
                    }
                    for (let i = 0; i < start.length; i++) {
                        if (start.slice(i) === "(") {
                            numLeft++;
                        } else if (start.slice(i) === ")") {
                            numRight++;
                        }
                    }
                    for (let i = 0; i < end.length; i++) {
                        if (end.slice(i) === "(") {
                            numLeft++;
                        } else if (end.slice(i) === ")") {
                            numRight++;
                        }
                    }
                    console.log(`left: ${numLeft} right: ${numRight}`)

                    if (numLeft === numRight + 1) {
                        console.log("1");
                        setStart("");
                    } else if (numLeft < numRight + 1) {
                        console.log("2");
                        setStart("(".repeat((numRight + 1 - numLeft)));
                    } else {
                        console.log("3");
                        setStart("(".repeat((numLeft - numRight + 1)));
                    }
                        
                    return prev + ")";
    }

    // TODO: Check UI
    function handleUI() {

    }

    // TODO: Make calculator component & function
    function calc() {

    }

    // TODO: Set function. Can call calc(). Make submit button component.
    function checkAns() {

    }

    return (
        <main>
            <h1>21 Game Prototype 1</h1>
            <Numbers btnclicked={btnClicked} elementId="1" val={val1} />
            <Numbers btnclicked={btnClicked} elementId="2" val={val2} />
            <Numbers btnclicked={btnClicked} elementId="3" val={val3} />
            <Numbers btnclicked={btnClicked} elementId="4" val={val4} />

            <Refresh />

            <InputBar value={solution} start={start} end={end}/>

        </main>
        
    )
}


export default App;
