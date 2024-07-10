import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase Was Clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLoClick = ()=>{
        // console.log("UpperCase Was Clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClearClick = ()=>{
        // console.log("UpperCase Was Clicked : " + text);
        let newText = '';
        setText(newText)
        props.showAlert("Clear Text", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    // Copy text
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    // Remove Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success");
    }

    const [text, setText] = useState('');
    // setText("New Text"); 
    return (
        <>
        <div className = "container" style = {{color: props.mode==='dark'?'white':'dark'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'dark':'white'}}
            id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Convert to ClearText</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style = {{color: props.mode==='dark'?'white':'dark'}}>
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").length} Words & {text.length} Characters </p>
            <p>{0.008 * text.split("").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
