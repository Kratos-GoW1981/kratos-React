import React, {useState} from 'react'

export default function Form(props) {
  const handleUpClick =()=>{
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleDownClick =()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }


  const handleSpeak =()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleClear =()=>{
    let newtext = '';
    setText(newtext)
  }
  const handleCopy =()=>{
    var text = document.getElementById("Box");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleDarkTheme = () => {
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('body').style.color = "white";
    
  }
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
const [text, setText] = useState("Enter your Text here");
  return (
    <>
    <div className="container">
        <h2> {props.heading}</h2>
        <form>
  <div className="mb-3">
    {/* <label for="exampleInputEmail1" className="form-label">{props.heading}</label> */}
    <textarea type="text" className="form-control" value={text} onChange={handleOnChange} id="Box" rows="8" />
    
  </div>
  <button  className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button> 
  <button className="btn btn-primary mx-1" onClick={handleDownClick}>Lowercase</button>
  <button className="btn btn-dark mx-1" onClick={handleDarkTheme}>Dark</button>
  <button className="btn btn-danger mx-1" onClick={handleClear}>Clear Text</button>
  <button className="btn btn-success mx-1" onClick={handleSpeak}>Speak</button>
  <button className="btn btn-warning mx-1" onClick={handleCopy}>Copy Text</button>

  {/* <button className="btn btn-primary mx-1" onClick={handleColor}>Change Color</button> */}
</form>    
      
    </div>
    <div className="container my-2">
      <h1> Information</h1>
      <p> {text.split(" ").length} words ani {text.length} characters</p>
      <p> In {0.008 *text.split(" ").length} minutes, it can be read</p>


    </div>
    </>
  )
}
