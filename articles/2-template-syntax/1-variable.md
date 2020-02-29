# How to display a variable in V.A.R

> This session only focuses on the template. The other parts such as component, method, state, and prop will introduce in other sessions.
>
> ⚠️This session tries to make the examples look similar, but the real code usages could look different, especially React parts.

## Vue

> Vue uses HTML in .vue file by default.
>
> Vue does the tricks for you to access Props and Data(State).
>
> Therefore, you can use `{{ foo }}` instead of `{{ this.props.foo }}` and `{{ this.state.bar }}`.

### Example code
- [src/components/HelloWorld.vue](../../examples/var-vue/src/components/HelloWorld.vue)

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

> Angular uses HTML in .component.html file by default.
>
> Angular uses class properties to represent variables on the template.
>
> Therefore, the normal properties are State, and the properties with `@Input()` decorator are Props.
>
> ⚠️You can set Access Modifiers (`public`, `private`, and `protected`) for properties(default is public).
>
> Only `public` and `protected` properties can be used for the template.

### Example code
- [src/app/hello-world/hello-world.component.html](../../examples/var-angular/src/app/hello-world/hello-world.component.html)
- [src/app/hello-world/hello-world.component.ts](../../examples/var-angular/src/app/hello-world/hello-world.component.ts)

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

> React uses JSX in .js file by default.
>
> Sorry, but React doesn't do any tricks for you to access Props and Data(State).
>
> Therefore, you need `{{ this.props.foo }}` and `{{ this.state.bar }}`.
>
> ⚠️The React examples use local variables inside the `render` method.
>
> It will only apply when the `render` cycle occurs.
>
> So, it won't update the template even if you do some magic such as `setInterval()` to mutate the local variables.

### Example code
- [src/components/HelloWorld.js](../../examples/var-react/src/components/HelloWorld.js)

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
  <p>Area of a circle: { (Math.PI * radius * radius).toFixed(2) }</p>
  <p>Number { num } is { num % 2 === 0 ? 'even' : 'odd' }</p>
</div>
```

### Accessing `object` or `array`
```jsx
<div>
  <p>{ person.name }</p>
  <p>{ person.phones[0].phoneNumber }</p>
  <p>{ person.foo?.bar || 'n/a' }</p>
</div>
```

### Calling methods
```jsx
<p>{ this.showEnumName(enumVal) }</p>
```

### Format - Calling methods
```jsx
<p>Today is { this.formatDate(new Date(), 'MM/DD/YYYY') }.</p>
```
```jsx
import moment from 'moment'

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
