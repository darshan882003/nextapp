import React ,{useState} from 'react'



export default function TextForm(props) {
  const handleLoClick = () =>{
    console.log("to uppercase is clicked"+text)
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  const handleUpClick = () =>{
    console.log("to uppercase is clicked"+text)
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const handleChange= (event)=>{
    setText(event.target.value)
  }
  const handleClear = ()=>{
    setText("enter the text hear")
  } 
    const [text, setText] = useState("enter the text hear")
  return (
    <>
    <div className='container '>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleChange}></textarea>
    </div>
    <button className="btn btn-primary mx-2 " onClick={handleLoClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to lowercase</button>
    <button className="btn btn-info mx-2" onClick={handleClear}>reset</button>
</div>
<div className="container my-3">
  <h2>your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p> 
  {/* hear the splice splicts the text variable with the space and then returns a array so .length to count the number of words */}
  <p>{0.008 * text.split(" ").length} min can be taken to read it</p>
  <h2>preview</h2>
  <p>{text}</p>
</div>
    </>

  )
}
