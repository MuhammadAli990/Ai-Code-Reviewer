import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import { generateResult } from "../services/codeReviewService";

function CodeEditor(props) {
    const {setOutput} = props;
  const [code, setCode] = useState("");

  const handleSubmit = async()=>{
    if(!code) return;
    setOutput(await generateResult(code));
  }

  return (
    <div className="mockup-window bg-primary text-primary-content min-w-full min-h-full overflow-auto relative p-4">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) =>
          prism.highlight(code, prism.languages.javascript, "javascript")
        }
        className="editor h-full w-full mt-2"
        style={{
            overflowY:"auto",
        }}
        placeholder="Write or paste some code...."
      />

      <button className="btn absolute top-2 right-3" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CodeEditor;
