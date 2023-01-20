import React, {useState} from 'react';
//useState is hook allows us to use class based component functionality in function based component

export default function TextForm(props) {
  const updateText = (event) =>{ //arrow function
    setText(event.target.value)
  }
  const upperCase = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text is converted to Upper Case", "success")
  }
  const lowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text is converted to Lower Case", "success")
  }
  const clearText = () =>{
    let newText = '';
    setText(newText)
    props.showAlert("Text is Cleared", "success")
  }
  const [text,setText] = useState("");

  const copyText = () => {
    navigator.clipboard.writeText(text.valueOf()).then(() => {
      console.log('Content copied to clipboard');
      props.showAlert("Text is Coppied", "success")
      /* Resolved - text copied to clipboard successfully */
    },() => {
      console.error('Failed to copy');
      props.showAlert("Failed to copy", "warning")
      /* Rejected - text failed to copy to the clipboard */
    });
  }

  const handleExtraSpace = () =>{
    let newText = text.split(/[ {2}]+/) //creating an array by split using regex one or more extra space exist [ {2}] - indicate consecutive two spaces
    setText(newText.join(" ")) //joining all words in newText array of sting to make one single string
    props.showAlert("Extra space is removed", "success")
  }

  return (
    <>
    <div className='container' style={{color: props.mode==="light" ? "black" : "white"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {updateText} id="Text Area" rows="10" 
        style={/*js object*/{backgroundColor: props.mode==="light" ? "white" : "#95989e",
        color: props.mode === "light" ? "black" : "white"}}></textarea>
    </div>
    <button className='btn btn-primary mx-2 my-2' onClick={upperCase} disabled={text.length===0}>Convert to Upper Case</button>
    <button className='btn btn-primary mx-2 my-2' onClick={lowerCase} disabled={text.length===0}>Convert to Lower Case</button>
    <button className='btn btn-primary mx-2 my-2' onClick={clearText} disabled={text.length===0}>Clear Text</button>
    <button className='btn btn-primary mx-2 my-2' onClick={copyText} disabled={text.length===0}>Copy Text</button>
    <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpace} disabled={text.length===0}>Remove Extra Space</button>
    </div>

    <div className='container my-3' style={{color: props.mode==="light" ? "black" : "white"}}>
        <h2>Your Text Summery</h2>
        <p>{`number of words = ${text.split(/\s+/).filter((element)=>{return element.length!==0}).length} number of character = ${text.length>0 ? text.length : 0}`}</p>
        <p>{`Time to read words = ${0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}`}</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}

/*ReplacePop.propTypes = {
  text: propTypes.string,
};*/

/*filter is higher order array method which filters array element based
on filtering conding if condition statisfy then element is returned to array
else element is removed from array*/