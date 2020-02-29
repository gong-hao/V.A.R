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
|    Vue     |  Angular   |   React    |                jQuery                |
| :--------: | :--------: | :--------: | :----------------------------------: |
| ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ | 😢I still have some template engines |

## Differences
|                                       |                                               Vue                                               |               Angular                |                        React                         |
| :-----------------------------------: | :---------------------------------------------------------------------------------------------: | :----------------------------------: | :--------------------------------------------------: |
|               language                |                                              HTML                                               |                 HTML                 | [JSX](https://reactjs.org/docs/introducing-jsx.html) |
|                syntax                 |                                           `{{ woo }}`                                           |             `{{ woo }}`              |                      `{ yoo }`                       |
|            format reusing             |                                             filter                                              |                 pipe                 |                        method                        |
|    access globals (`Date`, `Math`)    | [whitelist of globals](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9) | No, but you can assign to properties |                         Yes                          |
| safe navigation operator (`foo?.bar`) |                                               No                                                |                 Yes                  |                         Yes                          |

## Conclusions
- Everyone does a good job here.
