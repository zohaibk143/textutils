import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase wase clicked.")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }
    const handleLoClick = () => {
        //console.log("Uppercase wase clicked.")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case.", "success");
    }
    const handleOnChange = (event) => {
        //console.log("On change.")
        setText(event.target.value)
    }
    const handleClearText = () => {
        //console.log("Uppercase wase clicked.")
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared.", "success");
    }
    const handleCopy = ()=>{
        //console.log("i am copy.");
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard.", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed.", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#090928':'white',color:props.mode==='dark'?'white':'black'} } id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary.</h2>
            <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview.'}</p>
        </div>
        </>
    )
}
