import React, { useState } from 'react';
import Numbers from './Numbers';
import Refresh from './Refresh';
import InputBar from './InputBar';

function App() {

    function btnClicked(id) {
        document.querySelectorAll(".selector-panel").forEach((div) => div.innerHTML = "")
        let selector = "<div><button>+</button><button>-</button><button>*</button><button>/</button><button>&#40;</button><button>&#41;</button></div>"
        document.getElementById(id).innerHTML = selector;
    }

    let random = Math.random()
    function randInt() {
        return Math.floor(Math.random() * 10) + 1;
    }

    return (
        <main>
            <h1>21 Game Prototype 1</h1>
            <Numbers btnclicked={btnClicked} elementId="1" val={randInt()} />
            <Numbers btnclicked={btnClicked} elementId="2" val={randInt()} />
            <Numbers btnclicked={btnClicked} elementId="3" val={randInt()} />
            <Numbers btnclicked={btnClicked} elementId="4" val={randInt()} />

            <Refresh />

            <InputBar />

        </main>
        
    )
}


export default App
