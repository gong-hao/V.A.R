import React, { createRef } from 'react'

import axios from 'axios'

class RemoveApiClass extends React.Component {
  idRef = createRef()

  removeSkill = () => {
    axios
      .delete('http://localhost:4000/skill/' + this.idRef.current.value)
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.idRef} />
        <button onClick={this.removeSkill}>Remove</button>
      </div>
    )
  }
}

export default RemoveApiClass
