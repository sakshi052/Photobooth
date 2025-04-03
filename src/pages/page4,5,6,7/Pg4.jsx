import React, { useState, useEffect } from "react";
import "./pg4.css"; // Importing the CSS file

function Pg4(){

    const[count, setCount] = useState(3);
    const[showBlackScreen, setBlackScreen] =useState(false)

    useEffect(()=>{
        if(count > 0){
            const timer = setTimeout(()=>{
                setCount((count)=>count-1);
            },1000);
            return() => clearTimeout(timer);
        }else{
            setBlackScreen(true);
            setTimeout(()=>{
                window.location.pathname="./pg8";
            },1000);
        }
        
    },[count]);

  

    return (
        <div className="mainContainer">
        <div className={`container ${showBlackScreen? "black-screen": ""}`}>
            {!showBlackScreen && <h1 className="countdown">{count}</h1>}

        </div>
        </div>
    );
}

export default Pg4;
