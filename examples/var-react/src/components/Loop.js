import LoopItem from './LoopItem'
import React from 'react'

function Loop() {
  const items = [
    { id: 1, text: 'foo' },
    { id: 2, text: 'bar' },
    { id: 3, text: 'woo' }
  ]
  const person = {
    name: 'Gordon',
    age: 18,
    power: 999,
    isSuper: true
  }
  const getItems = take => {
    return [
      { id: 4, text: 'foo' },
      { id: 5, text: 'bar' },
      { id: 6, text: 'woo' }
    ].slice(0, take)
  }

  return (
    <>
      <h3>Array Rendering</h3>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.id}>
              index: {index} | text: {item.text}
            </li>
          )
        })}
      </ul>
      <hr />
      <h3>Object Rendering</h3>
      <ul>
        {Object.keys(person).map((key, index) => {
          return (
            <li key={key}>
              index: {index} | name: {key} | value: {person[key]}
            </li>
          )
        })}
      </ul>
      <hr />
      <h3>Times Rendering</h3>
      <ul>
        {Array.from(Array(3).keys()).map(x => {
          return <li key={x}>{x + 1}</li>
        })}
      </ul>
      <hr />
      <h3>Characters Rendering</h3>
      <ul>
        {'Good'.split('').map((c, index) => {
          return <li key={index}>{c}</li>
        })}
      </ul>
      <hr />
      <h3>Alias</h3>
      <ul>
        {items.map((item, index) => {
          const isFirst = index === 0
          const isLast = index === items.length - 1
          const isEven = index % 2 === 0
          const isOdd = index % 2 === 1
          return (
            <li key={item.id}>
              index: {index} |
              count: {items.length} |
              first: {isFirst.toString()} |
              last: {isLast.toString()} |
              even: {isEven.toString()} |
              odd: {isOdd.toString()}
            </li>
          )
        })}
      </ul>
      <hr />
      <h3>Without Showing a Root Element</h3>
      <ul>
        {items.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <li>index: {index}</li>
              <li>text: {item.text}</li>
            </React.Fragment>
          )
        })}
      </ul>
      <hr />
      <h3>With a Component</h3>
      <ul>
        {items.map((item, index) => {
          return <LoopItem index={index} item={item} key={item.id} />
        })}
      </ul>
      <hr />
      <h3>With a Method</h3>
      <ul>
        {getItems(3).map((item, index) => {
          return <li key={item.id}>{item.id}</li>
        })}
      </ul>
    </>
  )
}

export default Loop
