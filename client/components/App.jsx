import React, { useState } from 'react';
import Numbers from './Numbers';
import Refresh from './Refresh';
import InputBar from './InputBar';

function App() {

    const [val1, _1] = useState(randInt());
    const [val2, _2] = useState(randInt());
    const [val3, _3] = useState(randInt());
    const [val4, _4] = useState(randInt());

    const [solution, setSolution] = useState("")
    let sign = ""

    function btnClicked(id, num) {

        // Set Selector Panel
        document.querySelectorAll(".selector-panel").forEach((div) => div.innerHTML = "")
        let selector = "<div><button>+</button><button>-</button><button>*</button><button>/</button><button>&#40;</button><button>&#41;</button></div>"
        document.getElementById(id).innerHTML = selector;

        // Set Solution Bar
        if (true) {
            setSolution(solution + num);
            checkAllowedSolution()
        }
        
    }

    function checkAllowedSolution() {
        if (typeof(solution[solution.length - 1]) === "number") {

        }
        
    }

    let random = Math.random()
    function randInt() {
        return Math.floor(Math.random() * 10) + 1;
    }

    return (
        <main>
            <h1>21 Game Prototype 1</h1>
            <Numbers btnclicked={btnClicked} elementId="1" val={val1} />
            <Numbers btnclicked={btnClicked} elementId="2" val={val2} />
            <Numbers btnclicked={btnClicked} elementId="3" val={val3} />
            <Numbers btnclicked={btnClicked} elementId="4" val={val4} />

            <Refresh />

            <InputBar value={solution} setsolution={setSolution} />

        </main>
        
    )
}


export default App
