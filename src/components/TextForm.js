import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success")
  };
  const handleLoClick = () => {
    console.log("Lowercase was Clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase!", "success")
  };
  const handleClearClick = () => {
    console.log("Lowercase was Clicked" + text);
    let newtext = '';
    setText(newtext);
    props.showAlert("Text is cleared!", "success")
  };
  const handleUpChange = (event) => {
    console.log("Uppercase was Changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (<>
    <div className="container">
      <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleUpChange}
          id="mybox"
          rows="8"
          style={{backgroundColor:props.mode==='dark'?'gray':'light'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} 
      // style={{backgroundColor:props.mode==='dark'?'gray':'light',color:props.mode==='dark'?'white':'black'}}
      >
        Convert to uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
        (/E@R
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
      <h1>Your 💀 text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.length} Minutes read</p>
      <h2>preview</h2>
      <p>{text?text:"Nothing to preview"}</p>
      {/* <p>{text}</p> */}
    </div>
   
    </>
  );
}
