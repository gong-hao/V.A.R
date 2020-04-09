import React, { createRef } from 'react'

import axios from 'axios'

class ModifyApiClass extends React.Component {
  idRef = createRef()
  nameRef = createRef()
  keyRef = createRef()

  modifySkill = () => {
    const modifiedSkill = {
      name: this.nameRef.current.value,
      key: this.keyRef.current.value
    }
    axios
      .put(
        'http://localhost:4000/skill/' + this.idRef.current.value,
        modifiedSkill
      )
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.idRef} />
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.keyRef} />
        <button onClick={this.modifySkill}>Modify</button>
      </div>
    )
  }
}

export default ModifyApiClass
