import React, { useState } from 'react'

function HeroEventFunction({
  selectionChanges,
  items
}) {
  const [isSelectedAll, setIsSelectedAll] = useState(false)

  function onSelectionsChanged() {
    const selectedItems = items.filter(x => x.isSelected)
    selectionChanges(selectedItems)
  }

  function toggleSelectAll() {
    const newIsSelectedAll = !isSelectedAll
    setIsSelectedAll(newIsSelectedAll)
    for (const item of items) {
      item.isSelected = newIsSelectedAll
    }
    onSelectionsChanged()
  }

  function toggleSelectItem(item) {
    item.isSelected = !item.isSelected
    const newIsSelectedAll = items.every(x => x.isSelected)
    setIsSelectedAll(newIsSelectedAll)
    onSelectionsChanged()
  }

  return (
    <ul>
      <li onClick={toggleSelectAll}>
        {isSelectedAll ? <span>☑</span> : <span>☐</span>}
        <strong>Select All</strong>
      </li>
      {items.map(x => (
        <li key={x.id} onClick={() => toggleSelectItem(x)}>
          {x.isSelected ? <span>☑</span> : <span>☐</span>}
          {x.name}
        </li>
      ))}
    </ul>
  )
}

export default HeroEventFunction
