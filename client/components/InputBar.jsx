import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import '../static/InputBar.css';

function InputBar(props) {
    const modules = {
        toolbar: false
    };

    const formats = [
        'bold', 'italic', 'underline', 'strike', 'color', 'background'
    ];

    const handleChange = (content, delta, source, editor) => {
        props.setvalue(editor.getText());
    };

    // useEffect(() => {
    //     if (props.value) {
    //         let lastChar = props.value.slice(-1);
    //         if (lastChar === "0" || lastChar === "1" || lastChar === "2" || lastChar === "3") {
    //             switch (parseInt(lastChar)) {
    //                 case 0:
    //                     props.disable1(false);
    //                     break;
    //                 case 1:
    //                     props.disable2(false);
    //                     break;
    //                 case 2:
    //                     props.disable3(false);
    //                     break;
    //                 case 3:
    //                     props.disable4(false);
    //                     break;
    //                 default:
    //                     console.log("No case found");
    //                     console.log(props.value);
    //             }
    //         }
    //     }
    // }, [props.value]);

    return (
        <div>
            <p>{props.calc}</p>
            <ReactQuill 
                value={props.value} 
                onChange={handleChange} 
                modules={modules} 
                formats={formats} 
            />
        </div>
    );
}

export default InputBar;