import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("upper case was clicked", + text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick=()=>{
      let newText1 = text.toLowerCase();
      setText(newText1);
      props.showAlert("Converted to Lowercase","success")
    }
    const handleOnChange = (event)=>{
        // console.log("handle on change was clicked")
        setText(event.target.value)
    }
    const handleCoClick =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied to clipboard","success")
        

    }
    const handleExClick =()=>{
      let newText3 = text.split(/[" "]+/);
      setText(newText3.join(" "));
      props.showAlert("Extra spaces was removed","success")
    }

    const [text, setText] = useState('');
    //text="trying normal variable assignment"; Wrong way to change the state
    // setText = ("Enter your text here"); //Correct way to change the state
  return (
    <>
    <div className = "container" style={{color:props.mode==='dark' ? 'white':'black'}}> 
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="myBox" className="form-label">
        </label> 
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey':'white', color:props.mode==='dark' ? 'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div> 
      <button className="btn btn primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn primary mx-2" onClick={handleCoClick}>Copy Text</button>
      <button className="btn btn primary mx-2" onClick={handleExClick}>Erase extra spaces</button>
    </div>
    <div className="container my-2"  style={{color:props.mode==='dark' ? 'white':'black'}}>
      <h2>your text summary </h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the text box above to Preview  ithere"}</p>
    </div>
    
    </>
  )
}
