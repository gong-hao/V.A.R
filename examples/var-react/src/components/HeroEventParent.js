import React, { useState } from 'react'

import HeroEventFunction from './HeroEventFunction'

function HeroEventParent() {
  const [selectedItems, setSelectedItems] = useState([])
  const [skills] = useState([
    { id: 1, name: 'Runic Blade' },
    { id: 2, name: 'Broken Wings' },
    { id: 3, name: 'Ki Burst' },
    { id: 4, name: 'Valor' },
    { id: 5, name: 'Blade of the Exile' },
    { id: 6, name: 'Wind Slash' }
  ])

  function onSelectionChanges(selectedItems) {
    setSelectedItems(selectedItems)
  }

  return (
    <>
      <HeroEventFunction items={skills} selectionChanges={onSelectionChanges} />
      <ol>
        {selectedItems.map(x => (
          <li key={x.id}>{x.name + '\t'}</li>
        ))}
      </ol>
    </>
  )
}

export default HeroEventParent
