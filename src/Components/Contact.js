import React, { useState } from 'react';
import { sentenceCase } from "sentence-case";
import { capitalCase } from "capital-case";
import camelCase from 'camelcase';


export default function Contact (props) {

  // upper case function

  const handleUpclick = ()=> {
      // console.log("uppercase clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
  }  
  
  // lowercase function

  const handleloclick = ()=> {
      // console.log("lowercase clicked");
      let newText = text.toLowerCase();
      setText(newText);
  } 

  // sentense case fucntion

   const handleSenon = ()=> {
      // console.log("sentence case clicked");
      let newText = sentenceCase(text);
      setText(newText);
  } 
  
  // captalize fucntion

  const handleCaclick = ()=> {
      // console.log("captalize case clicked");
      let newText = capitalCase(text);
      setText(newText);
  } 
  
  // camel case function

  const HandleCmclick = ()=> {
      // console.log("camel case clicked");
      let newText = camelCase(text);
      setText(newText);
  }  
  
  // clear text fucntion

  const handleClclick = ()=> {
      // console.log("clear txt clicked");
      let newText = ("");
      setText(newText);
  } 
  
  // on change function for text area

  const handleOnchange = (event)=> {
      // console.log("On Change");
      setText(event.target.value); // this will allow us to type in the text-area

  }

  // using state to add value in text area 

  const [text, setText] = useState("Enter Text Here");


  return (
    <>
  <div className="p-5 mb-5">

  <div className="container mt-5">
  <h1 className="text-center border text-light mt-5 p-5">CHANGE TEXT CASE</h1>
  <p className="text-center text-light mt-5">Change Text Case is a handy web application that enables you to change the text case of any given text. Simply copy and paste the text into the text area below and click the required text case.</p>
  <div className="mt-3">
  <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnchange} rows="10"></textarea>
  <h4 className="text-light mt-2">Words Count = {text.split(" ").length}</h4>
  <h4 className="text-light mt-2">Character Length = {text.length}</h4>
  <button className="btn btn-outline-light text-right" onClick={handleClclick}>Clear</button>
  </div>
  <div className='text-center'>
  <button type="submit" className="btn btn-outline-light mt-3 mx-1">Toggle Case</button>
  <button type="submit" className="btn btn-outline-light mt-3 mx-1" onClick={handleSenon}>Sentense Case</button>
  <button type="submit" className="btn btn-outline-light mt-3 mx-1" onClick={handleloclick}>Lower Case</button>
  <button type="submit" className="btn btn-outline-light mt-3 mx-1" onClick={handleUpclick}>UPPER Case</button>
  <button type="submit" className="btn btn-outline-light mt-3 mx-1" onClick={handleCaclick}>Capitalize Case</button>
  <button type="submit" className="btn btn-outline-light mt-3 mx-1" onClick={HandleCmclick}>Camel Case</button>
  </div>
</div>
</div>
</>
  )
}
