import React from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import kotlin from "react-syntax-highlighter/dist/esm/languages/prism/kotlin"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"

SyntaxHighlighter.registerLanguage("kotlin", kotlin)

export const Code = ({ content, language, showLines }) => {
  const codeString = content;
  return (
    <div className="text-xl leading-normal tracking-tight">
      <SyntaxHighlighter
        language={language}
        style={okaidia}
        showLineNumbers={showLines}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}
