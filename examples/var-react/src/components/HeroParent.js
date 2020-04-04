import React, { useState } from 'react'

import HeroPropsFunction from './HeroPropsFunction'

function HeroParent() {
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
    <HeroPropsFunction
      name={name}
      title={title}
      health={health}
      attackDamage={attackDamage}
      skills={skills}
    />
  )
}

export default HeroParent
