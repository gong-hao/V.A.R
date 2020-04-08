import React from 'react'

class HeroEventClass extends React.Component {
  state = {
    isSelectedAll: false
  }

  onSelectionsChanged = () => {
    const selectedItems = this.props.items.filter(x => x.isSelected)
    this.props.selectionChanges(selectedItems)
  }

  toggleSelectAll = () => {
    const newIsSelectedAll = !this.state.isSelectedAll
    this.setState({ isSelectedAll: newIsSelectedAll })
    for (const item of this.props.items) {
      item.isSelected = newIsSelectedAll
    }
    this.onSelectionsChanged()
  }

  toggleSelectItem = (item) => {
    item.isSelected = !item.isSelected
    const newIsSelectedAll = this.props.items.every(x => x.isSelected)
    this.setState({ isSelectedAll: newIsSelectedAll })
    this.onSelectionsChanged()
  }

  render() {
    return (
      <ul>
        <li onClick={this.toggleSelectAll}>
          {this.state.isSelectedAll ? <span>☑</span> : <span>☐</span>}
          <strong>Select All</strong>
        </li>
        {this.props.items.map(x => (
          <li key={x.id} onClick={() => this.toggleSelectItem(x)}>
            {x.isSelected ? <span>☑</span> : <span>☐</span>}
            {x.name}
          </li>
        ))}
      </ul>
    )
  }
}

export default HeroEventClass
