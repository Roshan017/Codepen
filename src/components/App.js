import React from "react";
import Editor from "./Editor";

function App() {
  return (
    <>
      <div className="top-pane">
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
