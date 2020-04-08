import React, { useState } from 'react'

function HeroCheckFunction({
  onCheckChanges
}) {
  const [isChecked, setIsChecked] = useState(false)
  function toggleChecked() {
    const newIsChecked = !isChecked
    setIsChecked(newIsChecked)
    onCheckChanges(newIsChecked)
  }
  return (
    <div onClick={toggleChecked}>
      {isChecked ? <span>☑</span> : <span>☐</span>}
    </div>
  )
}

export default HeroCheckFunction
