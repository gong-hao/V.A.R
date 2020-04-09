import React, { useRef } from 'react'

import axios from 'axios'

function RemoveApiFunction() {
  const idRef = useRef()

  function removeSkill() {
    axios
      .delete('http://localhost:4000/skill/' + idRef.current.value)
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <input type="text" ref={idRef} />
      <button onClick={removeSkill}>Remove</button>
    </div>
  )
}

export default RemoveApiFunction
