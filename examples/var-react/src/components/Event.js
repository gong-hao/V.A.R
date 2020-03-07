import React, { useRef, useState } from 'react'

function Event() {
  const [val, setVal] = useState(10)
  const userInput = useRef()

  function addVal() {
    setVal(val + (Number(userInput.current.value) || 0))
  }

  function addWithVal(_val) {
    setVal(val + (Number(_val) || 0))
  }

  function hi(event) {
    alert(`${event.type} event`)
  }

  function foo(event, memo) {
    console.log(event.currentTarget, memo)
  }

  return (
    <>
      {val}
      <input type="text" ref={userInput} />
      <p>With Handler Reference</p>
      <button onClick={addVal}>Add Value</button>
      <p>With Invoking Handler</p>
      <button onClick={() => addVal()}>Add Value</button>
      <p>With a Expression</p>
      <button onClick={() => setVal(val + (Number(userInput.current.value) || 0))}>Add Value</button>
      <p>With Parameters</p>
      <button onClick={() => addWithVal(userInput.current.value)}>Add Value</button>
      <p>With the Event Parameter</p>
      <button onClick={hi}>Hi</button>
      <button onClick={event => hi(event)}>Hi</button>
    </>
  )
}

export default Event
