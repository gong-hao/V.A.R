import React from 'react'

function LoopItem({ index, item }) {
  return <li>index: {index} | text: {item.text}</li>
}

export default LoopItem
