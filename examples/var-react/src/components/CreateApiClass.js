import React, { createRef } from 'react'

import axios from 'axios'

class CreateApiClass extends React.Component {
  nameRef = createRef()
  keyRef = createRef()

  createSkill = () => {
    const newSkill = {
      name: this.nameRef.current.value,
      key: this.keyRef.current.value
    }
    axios
      .post('http://localhost:4000/skill/', newSkill)
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.keyRef} />
        <button onClick={this.createSkill}>Create</button>
      </div>
    )
  }
}

export default CreateApiClass
