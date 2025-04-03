import React from "react";
import LovingHands from "../../assets/pg3/LovingHands.png";
import "./pg3.css"
import Pattern1 from "../../assets/pg2/Pattern.png";

function Pg3(){
    return(
        <div>
            <div className="pg3-input">
                
            <form>
                <div className="ques1">
                <label className="pg3-ip" for="userName">What shall we call you?</label><br></br>
                </div>
                <input className="pg3-blank" type="text" id="userName" name="userName" required></input><br></br>
                
            </form>
            <form>
                <div className="ques2">
                <label className="pg3-ip" for="Friend">Who's sharing the frame with you?</label><br></br>
                <input className="pg3-blank" type="text" id="friend" name="Friend" required></input><br></br>
                </div>   
            </form>
            <form>
            <div className="ques3">
            <label className="pg3-ip" for="note">Note ❤️</label><br></br>
            <input className="pg3-blank" type="text" id="note" name="note" maxlength="100" required></input>
            </div>
            <button onClick={() => (window.location.href = "/pg4")} className="submit-btn" type="submit">Submit</button>
            </form>
            </div>

            <div className="pg3-upload">
                <div className="img2">
                <img src={LovingHands} className="pg3_hands" alt="LovingHands"/>
                </div>
                <form>
                <input  type="file" id="fileUpload" name="fileUpload" required></input>
                <button className="pg3-btn">Upload</button>
                </form>
                
            </div>
            
            <div>
                <button onClick={() => (window.location.href = "/pg2")} className="bck-btn">back</button>
            </div>

            <div className="bottom" >
                        <img className="pattern" src= {Pattern1}/>
                       </div>
        </div>
    )
}

export default Pg3