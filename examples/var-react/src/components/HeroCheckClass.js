import React from 'react'

class HeroCheckClass extends React.Component {
  state = {
    isChecked: false
  }

  toggleChecked = () => {
    const newIsChecked = !this.state.isChecked
    this.setState({ isChecked: newIsChecked })
    this.props.onCheckChanges(newIsChecked)
  }

  render() {
    return (
      <div onClick={this.toggleChecked}>
        {this.state.isChecked ? <span>☑</span> : <span>☐</span>}
      </div>
    )
  }
}

export default HeroCheckClass
