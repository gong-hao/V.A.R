import React, { useState } from 'react'

function Hero() {
  const [name, setName] = useState('Riven')
  const [title, setTitle] = useState('The Exile')
  const [health, setHealth] = useState(560)
  const [attackDamage, setAttackDamage] = useState(64)
  const [skills, setSkills] = useState([
    { id: 1, name: 'Runic Blade', key: null },
    { id: 2, name: 'Broken Wings', key: 'q' },
    { id: 3, name: 'Ki Burst', key: 'w' },
    { id: 4, name: 'Valor', key: 'e' },
    { id: 5, name: 'Blade of the Exile', key: 'r' },
    { id: 6, name: 'Wind Slash', key: 'r' }
  ])

  return (
    <>
      <h1>{name}</h1>
      <h3>Health: {health}</h3>
      <h3>Attack Damage: {attackDamage}</h3>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            {skill.name}
            {skill.key ? <span>[{skill.key}]</span> : null}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Hero
