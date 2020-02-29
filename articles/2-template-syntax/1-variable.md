# How to display a variable in V.A.R

## Vue
> Using HTML in .vue file by default

### Showing text
```html
<p>{{ message }}</p>
```

### String concatenation
```html
<p>{{ name + ' is such ' + something + '!' }}</p>
```

### Ternary Operator
```html
<p>{{ isGood ? 'Yep' : 'Nope' }}</p>
```

### Arithmetic
```html
<div>
  <p>No: {{ index + 1 }}</p>
  <p>Area of a circle: {{ (Math.PI * radius * radius).toFixed(2) }}</p>
  <p>Number {{ num }} is {{ num % 2 === 0 ? 'even' : 'odd' }}</p>
</div>
```

### Accessing `object` or `array`
```html
<div>
  <p>{{ person.name }}</p>
  <p>{{ person.phones[0].phoneNumber }}</p>
</div>
```

### Calling methods
```html
<p>{{ showEnumName(enumVal) }}</p>
```

### Format - Filter
```html
<p>Today is {{ new Date() | formatDate('MM/DD/YYYY') }}.</p>

```
```js
import moment from 'moment'

Vue.filter('formatDate', (value, pattern) => {
  if (value) {
    return moment(value).format(pattern)
  }
})
```

## Angular

> Using HTML in .component.html file by default

### Showing text
```html
<p>{{ message }}</p>
```

### String concatenation
```html
<p>{{ name + ' is such ' + something + '!' }}</p>
```

### Ternary Operator
```html
<p>{{ isGood ? 'Yep' : 'Nope' }}</p>
```

### Arithmetic
```html
<div>
  <p>No: {{ index + 1 }}</p>
  <p>Area of a circle: {{ (pi * radius * radius).toFixed(2) }}</p>
  <p>Number {{ num }} is {{ num % 2 === 0 ? 'even' : 'odd' }}</p>
</div>
```

### Accessing `object` or `array`
```html
<div>
  <p>{{ person.name }}</p>
  <p>{{ person.phones[0].phoneNumber }}</p>
  <p>{{ person.foo?.bar || 'n/a' }}</p>
</div>
```

### Calling methods
```html
<p>{{ showEnumName(enumVal) }}</p>
```

### Format - Pipe
```html
<p>Today is {{ today | date : 'MM/dd/yyyy' }}.</p>
```

## React

> Using JSX in .js file by default

### Showing text
```jsx
<p>{ message }</p>
```

### String concatenation
```jsx
<p>{ name + ' is such ' + something + '!' }</p>
```

### Ternary Operator
```jsx
<p>{ isGood ? 'Yep' : 'Nope' }</p>
```

### Arithmetic
```jsx
<div>
  <p>No: { index + 1 }</p>
  <p>Area of a circle: { (pi * radius * radius).toFixed(2) }</p>
  <p>Number { num } is { num % 2 === 0 ? 'even' : 'odd' }</p>
</div>
```

### Accessing `object` or `array`
```jsx
<div>
  <p>{ person.name }</p>
  <p>{ person.phones[0].phoneNumber }</p>
</div>
```

### Calling methods
```jsx
<p>{ showEnumName(enumVal) }</p>
```

### Format - Calling methods
```jsx
<p>Today is { formatDate(today, 'MM/DD/YYYY') }.</p>
```
```jsx
formatDate(value, pattern) {
  if (value) {
    return moment(value).format(pattern)
  }
}
```

## Scores
|    Vue     |  Angular   |  React   |
| :--------: | :--------: | :------: |
| ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️ |

## Conclusions
- Everyone does a good job here.
- The only thing needs to be pull out is React uses JSX ([Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)).
  - JSX is a syntactic sugar of JavaScript.
  - It uses only one pair of curly brackets.
  - You can use `if`, `for`, or `while` statements because it's just JavaScript.
  - It increases the flexibility of view logic but reduces the readability of the html structure if the logic is complex and you're so good at messing up codes.
  - JSX is optional, but you won't want to play React without JSX.
