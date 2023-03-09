import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// const API_URL = "http://localhost:8000"; // had to use this because proxy not working
const API_URL = "https://bot-o-mat-backend.herokuapp.com";

function Homepage() {
  const [robotype, setRobotype] = useState(1);
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleClick = () => {
    fetch(API_URL + "/setup", {
      method: "POST",
      body: JSON.stringify({
        robotname: name,
        type: robotype,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    navigate("/tasks");
  };

  return (
    <div className="center-content container">
      <h1 className="welcome-header"> welcome to BOT-O-MAT</h1>
      <p> please enter the name of your robot: </p>
      <div class="ui big input">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <p> and select the type of robot: </p>
      <select
        class="ui big selection dropdown"
        onChange={(e, value) => setRobotype(e.target.value)}
      >
        <option value="1">unipedal</option>
        <option value="2">bipedal</option>
        <option value="3">quadrupedal</option>
        <option value="4">arachnid</option>
        <option value="5">radial</option>
        <option value="6">aeronautical</option>
      </select>
      <p> </p>
      <button class="ui big secondary button" onClick={handleClick}>
        set up my robot!
      </button>
    </div>
  );
}

export default Homepage;
