import React from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import kotlin from "react-syntax-highlighter/dist/esm/languages/prism/kotlin"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"

SyntaxHighlighter.registerLanguage("kotlin", kotlin)

export const Code = ({ children }) => {
  const codeString = children;
  return (
    <div className="text-xl leading-normal tracking-tight">
    <SyntaxHighlighter language="kotlin" style={okaidia} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
    </div>
  )
}
