import React from 'react';

function InputBar(props) {

    function handleChange(event) {
        props.setsolution(event.target.value);
    }

    return (
        <input type="text" id="solution-bar" placeholder="solution" onChange={handleChange} value={props.value} />
    )
}

export default InputBar