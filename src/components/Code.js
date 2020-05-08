import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism"

export const Code = ({ className, content }) => {
  const codeString =
    'Class<?> cl = Class.forName("com.example.SomeClass");\nConstructor<?> cons = cl.getConstructor(Param1.class, Param2.class);'
  return (
    <SyntaxHighlighter language="kotlin" style={coy} showLineNumbers>
      {codeString}
    </SyntaxHighlighter>
  )
}
