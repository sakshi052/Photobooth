import React, { useState, useEffect } from "react";
import Pattern1 from "../../assets/pg2/Pattern.png";
import "./pg8.css"

function Pg8(){
    return(
        <div>
            <div className="printing">
                <h3 className="msg">Your Photo is getting printed!</h3>
            </div>

            <div className="photostrip"></div>

            <div className="stripBox">
            <div className="outerBox">
                <div className="innerBox">

                </div>
            </div>
            </div>
            
            <div className="bottom" >
                <img className="pattern" src= {Pattern1}/></div>
        </div>
    )
}

export default Pg8;