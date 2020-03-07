import React, { useState } from 'react'

function Condition() {
  const [isShow, setIsShow] = useState(true)
  const [option, setOption] = useState('Z')

  const showIfEven = (num) => {
    return num % 2 === 0
  }

  const toggle = () => {
    setIsShow(!isShow)
    setOption(isShow ? 'A' : 'B')
  }

  let ifBlock = null
  if (isShow) {
    ifBlock = <div>You can see me</div>
  }

  let ifElseBlock = null
  if (isShow) {
    ifElseBlock = <div>You can see me</div>
  } else {
    ifElseBlock = <div>You can't see me</div>
  }

  let elseIfBlock = null
  if (option === 'A') {
    elseIfBlock = <div>A</div>
  } else if (option === 'B') {
    elseIfBlock = <div>B</div>
  } else if (option === 'C') {
    elseIfBlock = <div>C</div>
  } else {
    elseIfBlock = <div>Other</div>
  }

  let methodBlockA = null
  if (showIfEven(2)) {
    methodBlockA = <div>You can see 2</div>
  }
  let methodBlockB = null
  if (showIfEven(1)) {
    methodBlockB = <div>You can't see 1</div>
  }

  let switchCaseBlock = null
  switch (option) {
    case 'A':
      switchCaseBlock = <div>A</div>
      break
    case 'B':
      switchCaseBlock = <div>B</div>
      break
    case 'C':
      switchCaseBlock = <div>C</div>
      break
    default:
      switchCaseBlock = <div>Other</div >
      break
  }

  return (
    <>
      <button onClick={toggle}>Toggle!</button>
      <h3>If</h3>
      {ifBlock}
      {isShow &&
        <div>
          You can see me
      </div>
      }
      <h3>If Else</h3>
      {ifElseBlock}
      {isShow ?
        (
          <div>You can see me</div>
        ) :
        (
          <div>You can't see me</div>
        )}
      <h3>Else If</h3>
      {elseIfBlock}
      <h3>With a Method</h3>
      {methodBlockA}
      {methodBlockB}
      <h3>CSS display</h3>
      <div style={{ display: isShow ? 'block' : 'none' }}>You can see me</div>
      <h3>Switch Case</h3>
      {switchCaseBlock}
    </>
  )
}

export default Condition
