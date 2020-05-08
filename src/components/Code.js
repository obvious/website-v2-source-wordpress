import React from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import kotlin from "react-syntax-highlighter/dist/esm/languages/prism/kotlin"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"

SyntaxHighlighter.registerLanguage("kotlin", kotlin)

export const Code = ({ content, language, showLines }) => {
  const codeString = content;
  //TODO: Can't seem to find the setting to set language and show line numbers
  // ever since I deactivated that plugin. Investigate.
  language = "kotlin"
  showLines = "True";
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
