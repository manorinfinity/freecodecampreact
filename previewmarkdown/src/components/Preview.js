import React, { useEffect, useRef } from "react";
import "./Preview.css";
const Preview = (props) => {
  const outputDiv = useRef(null);
  useEffect(() => {
    outputDiv.current.innerHTML = props.input();
  });
  return <div ref={outputDiv} id="preview"></div>;
};
export default Preview;
