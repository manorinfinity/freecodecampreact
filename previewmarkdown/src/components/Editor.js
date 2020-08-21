import React, { useState } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
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
  };
  const handleOutput = () => {
    let output;
    marked.setOptions({
      breaks: true,
    }); //This replace all \n with br
    output = DOMPurify.sanitize(marked(state.inputText || ""));
    // setState({ outputText: output });
    return output;
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
