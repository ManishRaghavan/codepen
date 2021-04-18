import { useState,useEffect } from "react";
import {Editor} from "./Editor.jsx"
function App() {
  const [Html,SetHtml] = useState("")
  const [Css,SetCss] = useState("")
  const [Js,SetJs] = useState("")
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${Html}</body>
          <style>${Css}</style>
          <script>${Js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [Html, Css, Js])

  return (
    <>
      <div className="box topBox">
        <Editor
          displayName="HTML"
          onChange={SetHtml}
          value={Html}
          language="xml"
        />
          <Editor
          displayName="CSS"
          onChange={SetCss}
          value={Css}
          language="css"
        />
          <Editor
          displayName="JAVASCRIPT"
          onChange={SetJs}
          value={Js}
          language="javascript"
        />
      </div>
      <div className="box">
        <iframe
        srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
