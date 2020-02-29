<template>
  <div class="container">
    <header>
      <h1>Hello World</h1>
    </header>
    <article>
      <div class="block">
        <h3>Showing text</h3>
        <p>{{message}}</p>
      </div>
      <div class="block">
        <h3>String concatenation</h3>
        <p>{{name + ' is such ' + something + '!'}}</p>
      </div>
      <div class="block">
        <h3>Ternary Operator</h3>
        <p>{{isGood ? 'Yep' : 'Nope'}}</p>
      </div>
      <div class="block">
        <h3>Arithmetic</h3>
        <p>No: {{index + 1}}</p>
        <p>Area of a circle: {{(Math.PI * radius * radius).toFixed(2)}}</p>
        <p>Number {{num}} is {{num % 2 === 0 ? 'even' : 'odd'}}</p>
      </div>
      <div class="block">
        <h3>Accessing object or array</h3>
        <p>{{person.name}}</p>
        <p>{{person.phones[0].phoneNumber}}</p>
      </div>
      <div class="block">
        <h3>Calling methods</h3>
        <p>{{showEnumName(enumVal)}}</p>
      </div>
      <div class="block">
        <h3>Format - Pipe</h3>
        <p>Today is {{new Date() | formatDate('MM/DD/YYYY')}}.</p>
      </div>
    </article>
  </div>
</template>

<script>
const AccountStatus = {
  Activated: 0,
  Locked: 1,
  0: 'Activated',
  1: 'Locked'
}

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello World',
      name: 'Gordon',
      something: 'a genius',
      isGood: false,
      index: 0,
      radius: 5,
      num: 13,
      person: {
        name: 'Gordon',
        phones: [
          { countryCode: '+1', phoneNumber: '(206) 123-4567', ext: null },
          { countryCode: '+886', phoneNumber: '(02) 2345-2266', ext: null }
        ],
        foo: null
      },
      enumVal: AccountStatus.Locked
    }
  },
  methods: {
    showEnumName(enumVal) {
      const enumName = AccountStatus[enumVal]
      return enumName
    }
  }
}
</script>
