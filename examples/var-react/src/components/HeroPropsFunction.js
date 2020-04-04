import PropTypes from 'prop-types'
import React from 'react'

function HeroPropsFunction({
  name,
  title,
  health,
  attackDamage,
  skills
}) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{title}</h1>
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

HeroPropsFunction.propTypes = {
  heroName: PropTypes.string,
  // Multiple possible types
  foo: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  title: PropTypes.string,
  // Required prop
  attackDamage: PropTypes.number.isRequired,
  // Custom validator
  health(props, propName, componentName) {
    const health = props[propName]
    if (!(health > 0 && health < 99999)) {
      return new Error('Invalid health range')
    }
  },
  skills: PropTypes.array
}

HeroPropsFunction.defaultProps = {
  // String with a default value
  title: 'Hero Title',
  // Number with a default value
  health: 0,
  skills: []
}

export default HeroPropsFunction
