import React, { useState } from "react";
import LovingHands from "../../assets/pg3/LovingHands.png";
import "./pg3.css";
import Pattern1 from "../../assets/pg2/Pattern.png";

function Pg3() {
  const [formData, setFormData] = useState({
    userName: "",
    partner: "",
    note: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="pg3-input">
        <form>
          <label className="pg3-ip" htmlFor="userName">What shall we call you?</label><br />
          <input
            className="pg3-blank"
            type="text"
            name="userName"
            userName={formData.userName}
            onChange={handleChange}
            required
          /><br />

          <label className="pg3-ip" htmlFor="Friend">Who's sharing the frame with you?</label><br />
          <input
            className="pg3-blank"
            type="text"
            name="partner"
            partner={formData.partner}
            onChange={handleChange}
            required
          /><br />

          <label className="pg3-ip" htmlFor="note">Note ❤️</label><br />
          <input
            className="pg3-blank"
            type="text"
            name="note"
            maxLength="200"
            note={formData.note}
            onChange={handleChange}
            required
          />
            <br></br>
          <button
            onClick={() => (window.location.href = "/pg4")}
            className="submit-btn"
            type="submit"
          >
            🌹 I'm In!
          </button>
        </form>
      </div>

      <div className="pg3-upload">
        <div className="img2">
          <img src={LovingHands} className="pg3_hands" alt="LovingHands" />
        </div>
        <form>
          <input type="file" id="fileUpload" name="fileUpload" required />
          <button className="pg3-btn">Upload</button>
        </form>
      </div>

      <div>
        <button 
          onClick={() => (window.location.href = "/pg2")}
          className="bck-btn"
        >
          Go Back
        </button>
      </div>

      <div className="bottom">
        <img className="pattern" src={Pattern1} />
      </div>
    </div>
  );
}

export default Pg3;
