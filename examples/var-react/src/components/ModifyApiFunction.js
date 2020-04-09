import React, { useRef } from 'react'

import axios from 'axios'

function ModifyApiFunction() {
  const idRef = useRef()
  const nameRef = useRef()
  const keyRef = useRef()

  function modifySkill() {
    const modifiedSkill = {
      name: nameRef.current.value,
      key: keyRef.current.value
    }
    axios
      .put(
        'http://localhost:4000/skill/' + idRef.current.value,
        modifiedSkill
      )
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <input type="text" ref={idRef} />
      <input type="text" ref={nameRef} />
      <input type="text" ref={keyRef} />
      <button onClick={modifySkill}>Modify</button>
    </div>
  )
}

export default ModifyApiFunction
