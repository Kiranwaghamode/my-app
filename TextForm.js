import React from "react";
import { useState } from "react";







export default function TextForm(props) {
  
  const [text, setText] = useState('');
  // setText('This is console')
  
  
  
  const handleLoclick = ()=>{
    console.log('Lower clicked');
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase' , 'success');
  }
  
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }


  
  
  // let replace = document.getElementById('replace').value;
  
  
  
  const repl =() =>{
    let find1 = document.getElementById('find').value;
    let repl1 = document.getElementById('replace').value;
    let newTxt = text.replace(find1, repl1)
    setText(newTxt)
  }
  
  const handleOnclick = ()=>{
    console.log('uppercase clicked');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase' , 'danger');
    document.title = 'word counter - Uppercase';
  }



  
  
  
  
  
  return (
    <>
    <div className="form-floating">
        <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        placeholder={props.placeholder}
        id="floatingTextarea2"
        // style="height: 100px"
        rows='20'
        value={text}
        onChange={handleOnChange}

      ></textarea>
      {/* <label htmlFor="floatingTextarea2">Comments</label> */}
      <button onClick={handleOnclick}>Uppercase</button>
      <button onClick={handleLoclick}>Lowercase</button>
    </div>

    <div className="container1">
      <h2>Text summary</h2>
      <p> <b>{text.split(" ").length} </b>words and <b>{text.length}</b> characters in your text</p>
      <p> <b>{0.008 / text.split(" ").length}</b> minutes read only</p>
    </div>

    <h2>Find and replace the words you need.</h2>
    <input type="text" placeholder="Find the word" id="find"/>
    {/* <button onClick={find}>Find</button> */}

    <h2>To</h2>

    <input type="text" placeholder="Replace it with" id="replace" />
    <button onClick={repl} >Replace</button>
    </>

  );
}
