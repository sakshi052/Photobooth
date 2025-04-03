import React from "react";
import BodyImage from "../../assets/pg2/Body.png";
import CurtainImage from "../../assets/pg2/curtain.png";
import Pattern1 from "../../assets/pg2/Pattern.png";
import "./pg2.css";
// import Pg3 from "../page3/Pg3";

function Pg2(){
    return(
        <div className="mainContainer">
            <div className="heading">
            <h2 className="heading_top">be my valentine's ?</h2>
            </div>
            
            <div className="hr1"></div>
            <div className="leftBox">
                <button className="btn">PhotoStrips</button>
                <button onClick={() => (window.location.href = "/pg3")} className="btn"><div class="blinking-dot"></div>Start</button>
            </div>


            <div className="rightBox">
            
                <div className="caption">
                    <h3 className="quote">Hi,</h3>
                    <h4 className="quote">The best moments are the ones we capture</h4>
                </div>   
                <img className="curtains" src= {CurtainImage}/>
                
            </div>
            <div className="body-img">
            <img  src= {BodyImage}alt="Body"/>  
            </div>
              
            <div className="bottom" >
            <img className="pattern" src= {Pattern1}/>
           </div>

           <div>
                <button onClick={() => (window.location.href = "/pg1")} className="bck-btn">back</button>
            </div>
            
        </div>
    )
}

export default Pg2