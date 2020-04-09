import React from 'react'
import axios from 'axios'

class ListApiClass extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    this.listSkills()
  }

  listSkills = () => {
    axios
      .get('http://localhost:4000/skill')
      .then(response => this.setState({ skills: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
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
    )
  }
}

export default ListApiClass
