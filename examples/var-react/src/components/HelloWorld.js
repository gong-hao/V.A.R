import React from 'react'
import moment from 'moment'

const AccountStatus = {
  Activated: 0,
  Locked: 1,
  0: 'Activated',
  1: 'Locked'
}

function showEnumName(enumVal) {
  const enumName = AccountStatus[enumVal]
  return enumName
}

function formatDate(value, pattern) {
  if (value) {
    return moment(value).format(pattern)
  }
}

function HelloWorld() {
  const message = 'Hello World'
  const name = 'Gordon'
  const something = 'a genius'
  const isGood = false
  const index = 0
  const radius = 5
  const num = 13
  const person = {
    name: 'Gordon',
    phones: [
      { countryCode: '+1', phoneNumber: '(206) 123-4567', ext: null },
      { countryCode: '+886', phoneNumber: '(02) 2345-2266', ext: null }
    ],
    foo: null
  }
  const enumVal = AccountStatus.Locked

  return (
    <div className="container">
      <header>
        <h1>Hello World</h1>
      </header>
      <article>
        <div className="block">
          <h3>Showing text</h3>
          <p>{message}</p>
        </div>
        <div className="block">
          <h3>String concatenation</h3>
          <p>{name + ' is such ' + something + '!'}</p>
        </div>
        <div className="block">
          <h3>Ternary Operator</h3>
          <p>{isGood ? 'Yep' : 'Nope'}</p>
        </div>
        <div className="block">
          <h3>Arithmetic</h3>
          <p>No: {index + 1}</p>
          <p>Area of a circle: {(Math.PI * radius * radius).toFixed(2)}</p>
          <p>Number {num} is {num % 2 === 0 ? 'even' : 'odd'}</p>
        </div>
        <div className="block">
          <h3>Accessing object or array</h3>
          <p>{person.name}</p>
          <p>{person.phones[0].phoneNumber}</p>
          <p>{person.foo?.bar || 'n/a'}</p>
        </div>
        <div className="block">
          <h3>Calling methods</h3>
          <p>{showEnumName(enumVal)}</p>
        </div>
        <div className="block">
          <h3>Format - Pipe</h3>
          <p>Today is {formatDate(new Date(), 'MM/DD/YYYY')}.</p>
        </div>
      </article>
    </div>
  )
}

export default HelloWorld
