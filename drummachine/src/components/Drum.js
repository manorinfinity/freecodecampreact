import React, { useEffect } from "react";
import "./Drum.css";

// The Structure is ready. Just add the functionality and styling in next session

const Drum = () => {
  const handleClick = (e) => {
    // This line accesses the child element and then plays it.
    e.target.querySelector("audio").play();
    document.getElementById("display").innerHTML = e.target.id;
    // We can use .volume to set the volume of audio elements
    // We can use .mute to mute all the audio files.
  };
  const handleKey = (e) => {
    const elemID = e.key.toUpperCase();
    if (document.getElementById(elemID)) {
      document.getElementById(elemID).play();
      document.getElementById("display").innerHTML = document.getElementById(
        elemID
      ).parentElement.id;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
  });
  return (
    <div id="drum-machine" className="container-fluid d-flex">
      {/* Trigger audio on Click and On Keyboard Keypress */}
      <div className="container row">
        <button
          className="drum-pad col-md-4"
          id="heater1"
          onClick={handleClick}
        >
          Q
          <audio
            className="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          ></audio>
        </button>
        <button
          className="drum-pad col-md-4"
          id="heater2"
          onClick={handleClick}
        >
          W
          <audio
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          ></audio>
        </button>
        <button
          className="drum-pad col-md-4"
          id="heater3"
          onClick={handleClick}
        >
          E
          <audio
            className="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          ></audio>
        </button>
        <button
          className="drum-pad col-md-4"
          id="heater4"
          onClick={handleClick}
        >
          A
          <audio
            className="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          ></audio>
        </button>
        <button
          className="drum-pad col-md-4"
          id="heater6"
          onClick={handleClick}
        >
          S
          <audio
            className="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          ></audio>
        </button>
        <button
          className="drum-pad col-md-4"
          id="heaterds"
          onClick={handleClick}
        >
          D
          <audio
            className="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          ></audio>
        </button>
        <button
          className="drum-pad col-md-4"
          id="heaterkc"
          onClick={handleClick}
        >
          Z
          <audio
            className="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          ></audio>
        </button>
        <button
          className="drum-pad col-md-4"
          id="heaterrp4"
          onClick={handleClick}
        >
          X
          <audio
            className="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          ></audio>
        </button>
        <button
          className="drum-pad col-md-4"
          id="heaterh2"
          onClick={handleClick}
        >
          C
          <audio
            className="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          ></audio>
        </button>
      </div>
      <div id="display"></div>
    </div>
  );
};
export default Drum;
