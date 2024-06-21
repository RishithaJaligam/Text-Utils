import React from 'react'

export default function About(props) {

    // const [myStyle , setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

let myStyle={
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
  
}


    // const [btntext,setBtnText]=useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if(myStyle.color ==='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong> Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        This tool allows you to effortlessly transform your text into various formats and 
        styles. You can convert text cases, including options like uppercase, lowercase, title case,
         and sentence case. For text formatting, you can make your text bold, italic, underline it, or 
         add a strikethrough. If you need to strip all formatting and return your text to plain form, 
         there is a remove formatting option.Additionally, the whitespace management options allow you to
          trim spaces, remove extra spaces, or add line breaks at specified intervals.Simply input your text into
           the provided field and choose the desired transformation!
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to use </strong> 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        The Text Converter feature in QuickUtilities is completely free to use. Effortlessly transform your text with options like case conversion, 
        formatting adjustments, text reversal, and encryption. Enjoy all these powerful tools without any cost—simply input your text and choose the transformation you need!
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         <strong> Browser Compatible</strong>  
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        The Text Converter in QuickUtilities is fully browser compatible, allowing you to use it seamlessly on any web browser.
         Enjoy quick and easy text transformations directly from your desktop or mobile browser. No downloads or installations required—just input your
          text and apply the desired changes. It's a convenient, accessible tool for all your text conversion needs.
        </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}
