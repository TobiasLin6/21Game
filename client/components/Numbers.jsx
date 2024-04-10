import React, { useState } from 'react';

function Numbers(props) {

    return (
        <div>
            <button disabled={props.disable} onClick={() => {
                props.btnclicked(props.elementId, props.val); 
                props.disablebtn(true);
            }}>
                <h1>{Number(props.val)}</h1>
            </button>
            <div id={props.elementId} className="selector-panel"></div>
        </div>
    )
        
}

export default Numbers;