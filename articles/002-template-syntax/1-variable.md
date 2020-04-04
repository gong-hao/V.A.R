# How to Display Variables in V.A.R

> The best way to ruin a project is to name all variables short, abbreviated, misleading, unprincipled, and unpredictable.

## Vue

> Vue uses HTML in .vue file by default.

> Vue does the tricks for you to access `Props` and `Data`(`State`). Therefore, you can use `{{foo}}` instead of `{{props.foo}}` and `{{state.bar}}`.

### Example Code
- [src/components/HelloWorld.vue](../../examples/var-vue/src/components/HelloWorld.vue)

### Showing Text 😁
```html
<p>{{message}}</p>
```

### String Concatenation 😁
```html
<p>{{name + ' is such ' + something + '!'}}</p>
```

### Ternary Operator 😁
```html
<p>{{isGood ? 'Yep' : 'Nope'}}</p>
```

### Arithmetic 😁
```html
<div>
  <p>No: {{index + 1}}</p>
  <p>Area of a circle: {{(Math.PI * radius * radius).toFixed(2)}}</p>
  <p>Number {{num}} is {{num % 2 === 0 ? 'even' : 'odd'}}</p>
</div>
```

### Accessing `Object` or `Array` 😁
```html
<div>
  <p>{{person.name}}</p>
  <p>{{person.phones[0].phoneNumber}}</p>
</div>
```

### Calling Methods 😁
```html
<p>{{showEnumName(enumVal)}}</p>
```

### Format - Filter 😁
```html
<p>Today is {{new Date() | formatDate('MM/DD/YYYY')}}.</p>

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

> Angular uses class fields to represent variables on the template. Although Angular doesn't use terms of `State` and `Props`, the normal fields are `State`, and the fields with `@Input()` decorator are `Props`.

> ⚠️You can set Access Modifiers (`public`, `private`, and `protected`) for fields(default is public), but only `public` and `protected` fields can be used for the template.

### Example Code
- [src/app/components/hello-world/hello-world.component.html](../../examples/var-angular/src/app/components/hello-world/hello-world.component.html)
- [src/app/components/hello-world/hello-world.component.ts](../../examples/var-angular/src/app/components/hello-world/hello-world.component.ts)

### Showing Text 😁
```html
<p>{{message}}</p>
```

### String Concatenation 😁
```html
<p>{{name + ' is such ' + something + '!'}}</p>
```

### Ternary Operator 😁
```html
<p>{{isGood ? 'Yep' : 'Nope'}}</p>
```

### Arithmetic 😁
```html
<div>
  <p>No: {{index + 1}}</p>
  <p>Area of a circle: {{(pi * radius * radius).toFixed(2)}}</p>
  <p>Number {{num}} is {{num % 2 === 0 ? 'even' : 'odd'}}</p>
</div>
```

### Accessing `Object` or `Array` 😁
```html
<div>
  <p>{{person.name}}</p>
  <p>{{person.phones[0].phoneNumber}}</p>
  <p>{{person.foo?.bar || 'n/a'}}</p>
</div>
```

### Calling Methods 😁
```html
<p>{{showEnumName(enumVal)}}</p>
```

### Format - Pipe 😁
```html
<p>Today is {{today | date : 'MM/dd/yyyy'}}.</p>
```

## React

> React uses JSX in .js file by default.

> Sorry, but React doesn't do any tricks for you to access `Props` and `State`. Therefore, you need `{{props.foo}}` and `{{state.bar}}`.

> ⚠️This React examples use local variables. It will only be applied when the `render` cycle occurs. So, it won't update the template even if you do some magic such as `setInterval()` to mutate the local variables later. To be honest, there is no `"auto" two-way binding` in React officially.

### Example Code
- [src/components/HelloWorld.js](../../examples/var-react/src/components/HelloWorld.js)

### Showing Text 😁
```jsx
<p>{message}</p>
```

### String Concatenation 😁
```jsx
<p>{name + ' is such ' + something + '!'}</p>
```

### Ternary Operator 😁
```jsx
<p>{isGood ? 'Yep' : 'Nope'}</p>
```

### Arithmetic 😁
```jsx
<div>
  <p>No: {index + 1}</p>
  <p>Area of a circle: {(Math.PI * radius * radius).toFixed(2)}</p>
  <p>Number {num} is {num % 2 === 0 ? 'even' : 'odd'}</p>
</div>
```

### Accessing `Object` or `Array` 😁
```jsx
<div>
  <p>{person.name}</p>
  <p>{person.phones[0].phoneNumber}</p>
  <p>{person.foo?.bar || 'n/a'}</p>
</div>
```

### Calling Methods 😁
```jsx
<p>{showEnumName(enumVal)}</p>
```

### Format - Calling methods 🙄
```jsx
<p>Today is {formatDate(new Date(), 'MM/DD/YYYY')}.</p>
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
|                               |  Vue  | Angular | React |
| :---------------------------- | :---: | :-----: | :---: |
| Showing Text                  |  😁   |   😁    |  😁   |
| String Concatenation          |  😁   |   😁    |  😁   |
| Ternary Operator              |  😁   |   😁    |  😁   |
| Arithmetic                    |  😁   |   😁    |  😁   |
| Accessing `Object` or `Array` |  😁   |   😁    |  😁   |
| Calling Methods               |  😁   |   😁    |  😁   |
| Format                        |  😁   |   😁    |  🙄   |

## Differences
|                                       |                                               Vue                                               |             Angular              |                        React                         |
| :------------------------------------ | :---------------------------------------------------------------------------------------------: | :------------------------------: | :--------------------------------------------------: |
| language                              |                                              HTML                                               |               HTML               | [JSX](https://reactjs.org/docs/introducing-jsx.html) |
| syntax                                |                                            `{{woo}}`                                            |            `{{woo}}`             |                       `{yoo}`                        |
| format reusing                        |                                             filter                                              |               pipe               |                        method                        |
| access globals (`Date`, `Math`)       | [whitelist of globals](https://github.com/vuejs/vue/blob/v2.6.10/src/core/instance/proxy.js#L9) | No, but you can assign to fields |                         Yes                          |
| safe navigation operator (`foo?.bar`) |                                               No                                                |               Yes                |                         Yes                          |
