import React, { useRef } from 'react'

import axios from 'axios'

function CreateApiFunction() {
  const nameRef = useRef()
  const keyRef = useRef()

  function createSkill() {
    const newSkill = {
      name: nameRef.current.value,
      key: keyRef.current.value
    }
    axios
      .post('http://localhost:4000/skill/', newSkill)
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <input type="text" ref={nameRef} />
      <input type="text" ref={keyRef} />
      <button onClick={createSkill}>Create</button>
    </div>
  )
}

export default CreateApiFunction
