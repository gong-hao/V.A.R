import React, { useEffect, useState } from 'react'

import axios from 'axios'

function ListApiFunction() {
  const [skills, setSkills] = useState([])

  useEffect(() => listSkills())

  function listSkills() {
    axios
      .get('http://localhost:4000/skill')
      .then(response => setSkills(response.data))
      .catch(error => console.log(error))
  }

  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.id}>
          {skill.name}
          {skill.key ? <span>[{skill.key}]</span> : null}
        </li>
      ))}
    </ul>
  )
}

export default ListApiFunction
