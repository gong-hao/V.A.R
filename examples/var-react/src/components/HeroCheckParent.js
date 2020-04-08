import React, { useState } from 'react'

import HeroCheckFunction from './HeroCheckFunction'

function HeroCheckParent() {
  const [isChecked, setIsChecked] = useState(false)
  function onCheckChanges(isChecked) {
    setIsChecked(isChecked)
  }
  return (
    <>
      {isChecked ? '☑' : '☐'}
      <HeroCheckFunction onCheckChanges={onCheckChanges} />
    </>
  )
}

export default HeroCheckParent
