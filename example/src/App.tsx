import React, { useState } from 'react'
import HTMLInput from 'react-input-with-html'
import './style.css'

const App = () => {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    // submit your own input places
    console.log('input on submit: ', input)
  }

  const dynamicHexMod = (value: string) => {
    return `<span class="hex-dot" style="--color: ${value};">${value}</span>`
  }

  const modifierArr = [
    {
      regexMatch: /#[0-9A-F]{6}/gi,
      htmlMod: dynamicHexMod
    },
    {
      regexMatch: /\+/g,
      htmlMod: `<span style="color: #a3a3a3">+</span>`
    }
  ]

  return (
    <>
      <h1 className={'title'}>Search for your stuff</h1>
      <HTMLInput
        id='input'
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
        modifierArr={modifierArr}
        spellCheck={false}
      />
    </>
  )
}

export default App
