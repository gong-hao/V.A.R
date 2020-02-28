# How to display a variable in V.A.R

## Vue
> Using HTML in .vue file by default

### Showing text
```html
<span>{{ message }}</span>
```

### String concatenation
```html
<span>{{ name + ' is such ' + something + '!' }}</span>
```

### Ternary Operator
```html
<span>{{ isGood ? 'Yep' : 'Nope' }}</span>
```

### Arithmetic
```html
<div>
  <span>No: {{ index + 1 }}</span>
  <span>Area of a circle: {{ 2 * Math.PI * (radius * radius) }}</span>
  <span>Number {{ num }} is {{ num % 2 === 0 ? 'even' : 'odd' }}</span>
</div>
```

### Accessing `object` or `array`
```html
<div>
  <span>{{ person.name }}</span>
  <span>{{ person.phones[0].phoneNumber }}</span>
</div>
```

### Calling methods
```html
<span>{{ showEnumName(enumVal) }}</span>
```

### Format - Filter
```html
<span>Today is {{ today | formatDate('MM/DD/YYYY') }}.</span>

```
```js
import moment from 'moment'

Vue.filter('formatDate', function(value, pattern) {
  if (value) {
    return moment(value).format(pattern)
  }
}
```

## Angular

> Using HTML in .component.html file by default

### Showing text
```html
<span>{{ message }}</span>
```

### String concatenation
```html
<span>{{ name + ' is such ' + something + '!' }}</span>
```

### Ternary Operator
```html
<span>{{ isGood ? 'Yep' : 'Nope' }}</span>
```

### Arithmetic
```html
<div>
  <span>No: {{ index + 1 }}</span>
  <span>Area of a circle: {{ 2 * pi * (radius * radius) }}</span>
  <span>Number {{ num }} is {{ num % 2 === 0 ? 'even' : 'odd' }}</span>
</div>
```

### Accessing `object` or `array`
```html
<div>
  <span>{{ person.name }}</span>
  <span>{{ person.phones[0].phoneNumber }}</span>
</div>
```

### Calling methods
```html
<span>{{ showEnumName(enumVal) }}</span>
```

### Format - Pipe
```html
<span>Today is {{ today | date : 'MM/dd/yyyy' }}.</span>
```

## React

> Using JSX in .js file by default

### Showing text
```jsx
<span>{ message }</span>
```

### String concatenation
```jsx
<span>{ name + ' is such ' + something + '!' }</span>
```

### Ternary Operator
```jsx
<span>{ isGood ? 'Yep' : 'Nope' }</span>
```

### Arithmetic
```jsx
<div>
  <span>No: { index + 1 }</span>
  <span>Area of a circle: { 2 * Math.PI * (radius * radius) }</span>
  <span>Number { num } is { num % 2 === 0 ? 'even' : 'odd' }</span>
</div>
```

### Accessing `object` or `array`
```jsx
<div>
  <span>{ person.name }</span>
  <span>{ person.phones[0].phoneNumber }</span>
</div>
```

### Calling methods
```jsx
<span>{ showEnumName(enumVal) }</span>
```

### Format - Calling methods
```jsx
<span>Today is { formatDate(today, 'MM/DD/YYYY') }.</span>
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