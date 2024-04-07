import React from 'react';

function InputBar(props) {
    return (
        <div 
            id="solution-bar" 
            contentEditable 
            suppressContentEditableWarning
        >
            <span style={{color: "gray"}}>{props.start}</span><span>{props.value}</span><span style={{color: "gray"}}>{props.end}</span>
        </div>
    )
}

export default InputBar