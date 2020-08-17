import React, { useState, useRef } from "react";
import Preview from "./Preview";
const Editor = (props) => {
  const [state, setState] = useState({
    inputText: "", //This will be the text that user enters
    outputText: "", //This will be the innerHTML text that we shall display on Preview
  });
  // We differentiate between words and lines using space and enter
  const handleChange = (e) => {
    e.preventDefault();
    setState({ [e.target.name]: e.target.value });
    // The text area renders its value only text. So, We will need to loop through the whole string of inputText and replace elements with p tags and other stuff.
  };
  const handleOutput = () => {
    let lineArray = state.inputText.split("\n");
    let spaceArray = lineArray.map((elem) => elem.split(" "));
    let final = spaceArray.map((line) => {
      if (line[0] === "###") {
        line[0] = "<h3>";
        line.push("</h3>");
      } else if (line[0] === "##") {
        line[0] = "<h2>";
        line.push("</h2>");
      } else if (line[0] === "#") {
        line[0] = "<h1>";
        line.push("</h1>");
      }
      return line.join(" ");
    });
    return final.join("\n");
  };
  return (
    <div>
      <textarea id="editor" name="inputText" onChange={handleChange}></textarea>
      <Preview input={handleOutput} />
      {/* We should pass outputText as a prop to Preview component */}
    </div>
  );
};
export default Editor;
