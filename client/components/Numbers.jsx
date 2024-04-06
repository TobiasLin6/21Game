import React, { useState } from 'react';

function Numbers(props) {

    return (
            <div>
                <button onClick={() => props.btnclicked(props.elementId)}><h1>{props.val}</h1></button>
                <div id={props.elementId} className="selector-panel"></div>
            </div>
    )
        
}

export default Numbers;