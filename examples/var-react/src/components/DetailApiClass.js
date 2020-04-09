import React from 'react'
import axios from 'axios'

class DetailApiClass extends React.Component {
  state = {
    skill: null
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id') || 1
    this.detailSkill(id)
  }

  detailSkill = (id) => {
    axios
      .get('http://localhost:4000/skill/' + id)
      .then(response => this.setState({ skill: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    const { skill } = this.state

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
}

export default DetailApiClass
