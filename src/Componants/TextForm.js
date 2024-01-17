import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }

    const handleLowClick = ()=>{
      //console.log("Lowercase was clicked")
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!","success")
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied!","success")
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!","success")
  }

  const handleClearClick = ()=>{
    //console.log("Clear was clicked")
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!","success")
}

    const handleOnChange = (event)=>{
        //console.log("On change")
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
  return (
    <>
      <div className='conatiner' style={{color: props.mode==='dark'?'white':'#092237'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" id="MyText" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#092237':'white',color:props.mode==='dark'?'white':'#092237'}} value={text}rows="8"></textarea>
          </div>
          <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
          <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowecase</button>
          <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}>Speak</button>
          <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
          <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>

      </div>
      <div className="container my-3"style={{color: props.mode==='dark'?'white':'#092237'}}>
        <h2>Your Text Summary Here</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Something to preview!!"}</p>
      </div>
    </>
  )
}
