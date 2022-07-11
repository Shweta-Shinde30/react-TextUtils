import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    //logic for convert in uppercase
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleDownClick = ()=>{
    console.log("Lowercase was clicked" + text);
    //logic for convert in uppercase
    let newText = text.toLowerCase();
    setText(newText)
  }


  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }

  const handleCopy = ()=>{
    console.log("Copied!");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!", "success");
  }

const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
}

// Declare a new state variable, which we'll call "count"
  const [text, setText] = useState(' ');
  //setText("new text");   correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Rewrite in Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Rewrite in Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
    </div>
    </>
  )
}
