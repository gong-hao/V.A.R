import React from 'react'

class HeroClass extends React.Component {
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
    return (
      <>
        <h1>{this.state.name}</h1>
        <h3>Health: {this.state.health}</h3>
        <h3>Attack Damage: {this.state.attackDamage}</h3>
        <ul>
          {this.state.skills.map(skill => {
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

export default HeroClass
