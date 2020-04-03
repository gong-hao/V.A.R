import React from 'react'

class HeroStateClass extends React.Component {
  state = {
    name: 'Riven',
    title: 'The Exile',
    health: 560,
    attackDamage: 64,
    skills: [
      { id: 1, name: 'Runic Blade', key: null },
      { id: 2, name: 'Broken Wings', key: 'q' },
      { id: 3, name: 'Ki Burst', key: 'w' },
      { id: 4, name: 'Valor', key: 'e' },
      { id: 5, name: 'Blade of the Exile', key: 'r' },
      { id: 6, name: 'Wind Slash', key: 'r' }
    ]
  }

  render() {
    const { name, health, attackDamage, skills } = this.state
    return (
      <>
        <h1>{name}</h1>
        <h3>Health: {health}</h3>
        <h3>Attack Damage: {attackDamage}</h3>
        <ul>
          {skills.map(skill => {
            return (
              <li key={skill.id}>
                {skill.name}
                {skill.key ? <span>[{skill.key}]</span> : null}
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default HeroStateClass
