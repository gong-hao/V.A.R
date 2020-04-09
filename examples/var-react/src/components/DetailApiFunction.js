import React, { useEffect, useState } from 'react'

import axios from 'axios'

function DetailApiFunction() {
  const [skill, setSkill] = useState(null)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id') || 1
    detailSkill(id)
  })

  function detailSkill(id) {
    axios
      .get('http://localhost:4000/skill/' + id)
      .then(response => setSkill(response.data))
      .catch(error => console.log(error))
  }

  if (!skill) {
    return null
  }

  return (
    <div>
      {skill.id} -
      {skill.name}
      {skill.key ? <span>[{skill.key}]</span> : null}
    </div>
  )
}

export default DetailApiFunction
