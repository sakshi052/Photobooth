import React, { useState, useEffect } from "react";
import Pattern1 from "../../assets/pg2/Pattern.png";
import "./pg8.css"
import { useLocation } from "react-router-dom";


function Pg8(){

    const location = useLocation();
  const { userName, partner, note } = location.state || {};
    return(
        <div>
            <div className="printing">
                <h3 className="msg">Your Photo is getting printed!</h3>
                <p><strong>Name:</strong> {userName}</p>
      <p><strong>Email:</strong> {partner}</p>
      <p><strong>Age:</strong> {note}</p>
            </div>

            
                
            

            <div className="stripBox">
            <div className="outerBox">
                <div className="innerBox">
                    <div className="strip">
                    <div className=" photo pic1"></div>
                    <div className="photo pic2"></div>
                    <div className="photo pic3"></div>
                    </div>
                    
                </div>
                
            </div>
            </div>

            <div className="pg8-btn">
                <button className="collect-btn" onClick={() => (window.location.href = "/pg9")}>Collect</button>
            </div>
            
            <div className="bottom" >
                <img className="pattern" src= {Pattern1}/></div>
        </div>
    )
}

export default Pg8;