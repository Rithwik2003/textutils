import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event);
  };
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared");
  };
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="container" >
          <h2 className='my-2'> {props.heading}</h2>
          <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === "dark" ? "#072a4a" : "white", color: props.mode === "dark" ? "white" : "black" }} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container">
          <h2 className='my-2'>Text Summary</h2>
          <p>{text.split(/\s+/).includes("") ? text.split(" ").length-1 : text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * (text.split(/\s+/).includes("") ? text.split(" ").length-1 : text.split(" ").length)} Minutes take if you read 125 WPM</p>
          <h2 className='my-2'>Preview</h2>
          <p>{text==="" ? "Enter something in the above text box to preview":text}</p>
        </div>
      </div>
    </>
  )
}