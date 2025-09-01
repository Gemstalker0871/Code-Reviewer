import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import './App.css'
import axios from 'axios'
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import WelcomePage from './Welcome'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(
    `function sum(){
return 1 + 1
}`)

  const [review, setReview] = useState(``)
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    prism.highlightAll()
  })


  const BASE_URL = import.meta.env.MODE === "development" ? 'http://localhost:3000/ai/get-review' : '/ai/get-review'

 async function reviewCode(){
 const response = await axios.post(BASE_URL, {code})

 setReview(response.data)

 }

 const handleClick = () => {
    if(showWelcome) setShowWelcome(false)
  }

  return (
    <>
    <div onClick={handleClick} style={{ height: "100vh", width: "100vw" }}>
      {showWelcome && <WelcomePage />}
      {!showWelcome && (
        <main>
          <div className="left">
            <div className="code">
              <Editor
                className="editor"
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 20,
                  borderRadius: "1rem",
                  height: "100%",
                  width: "100%",
                  border: "none",
                }}
              />
            </div>
            <div onClick={reviewCode} className="review">Review</div>
          </div>

          <div className="right">
            <Markdown rehypePlugins={[ rehypeHighlight ]}>
              {review}
            </Markdown>
          </div>
        </main>
      )}
    </div>
    </>
  )
}

function sum(){
  return 1 + 1
}

export default App

