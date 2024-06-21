import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=() =>{
     
      let newText= text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to UpperCase!","success");
    }
    const handleLowClick=() =>{
    
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase!","success");
    }
    const handleClearClick=() =>{
     
      let newText= ' ';
      setText(newText)
      props.showAlert("Cleared the text!","success");
    }
    const handleSenClick=() =>{
     
      let newText= text. toLowerCase(). replace(/(^\s*\w|[\.\!\?]\ s*\w)/g,function(c){return c. toUpperCase()});;
      setText(newText)
      props.showAlert("Converted to SentenceCase!","success");
    }
  
    const handleCopyClick=() =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clickboard!","success");
    }
    const handleExtraSpaceClick=() =>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Removed Extra spaces!","success");
    }


    const handleOnChange=(event) =>{
      setText(event.target.value);
    }

    
    const [text, setText] = useState('');
    // setText("New Text");
  return (
    <>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2 className= "mb-4">{props.heading}</h2>
       <div className="mb-3">
       <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'#042743'}} rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Lowercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSenClick}>Sentence Case</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaceClick}>Remove Extra Space</button>
    </div>
    <div className="container my-3"  style={{color:props.mode ==='dark'?'white':'#042743'}}>
    <h3>Your text summary</h3>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mintues to read</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
