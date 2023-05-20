import { useState } from 'react';
import React from 'react';
import './about.css';

export default function About() {

const [style, newStyle] = useState({
    
    backgroundColor: "white",
    color: "black"
    
    });

    const [button, setbutton] = useState("Enable dark mode");
    
    const toggleStyle = () => {
        if(style.color === 'black'){
            newStyle({
                backgroundColor: "black",
                color: "white"
            })
            setbutton('Enable light mode');
            
        }
        else{
            newStyle({
                backgroundColor: "white",
                color: "black"
            })
            setbutton('Enable dark mode');
        }
    }












  return (
    <>
    
    <div className="container" style={style}>

    </div>
    <button className='button' onClick={toggleStyle}>{button}</button>
   
    </>
  )
}
