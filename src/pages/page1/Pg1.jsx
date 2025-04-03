import React from "react";
import "./pg1.css";
// import {useNavigate} from "react-router-dom";
// import Pg2 from "../page2/Pg2";

function Pg1() {

    // const navigate = useNavigate();

    return (
        <>
        <div className="pg1_login_page">
            <h1 className="pg1_title">Photo-Booth</h1>
            
            <form action="post" className="pg1_form">
                <h3 className="pg1_email_heading">Email</h3>
                <input className="pg1_ip" type="text"  name="Email" required />
                <h3 className="pg1_password_heading">Password</h3>
                <input className="pg1_ip" type="password" name="password" required />
                <button onClick={() => (window.location.href = "/pg2")} id="pg1_login_button">Login!</button> 
            </form>
            
            <a href="/pg2" id="pg1_register">Register now!</a>
        </div>
        </>
    );
}

export default Pg1;
