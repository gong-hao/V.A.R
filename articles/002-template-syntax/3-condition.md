# How to Make Conditions in V.A.R

> Today you may understand the conditions, but tomorrow may not.

- [How to Make Conditions in V.A.R](#how-to-make-conditions-in-var)
  - [Vue](#vue)
    - [Example Code](#example-code)
    - [Script Part](#script-part)
    - [If Else](#if-else)
    - [With an Expression](#with-an-expression)
    - [Without Showing a Root Element](#without-showing-a-root-element)
    - [With a Method](#with-a-method)
    - [With a Computed Property](#with-a-computed-property)
    - [CSS `display`](#css-display)
    - [Switch Case](#switch-case)
    - [Caveats](#caveats)
  - [Angular](#angular)
    - [Example Code](#example-code-1)
    - [Script Part](#script-part-1)
    - [If Else](#if-else-1)
    - [With an Expression](#with-an-expression-1)
    - [Without Showing a Root Element](#without-showing-a-root-element-1)
    - [With a Method](#with-a-method-1)
    - [CSS `display`](#css-display-1)
    - [Switch Case](#switch-case-1)
    - [Caveats](#caveats-1)
  - [React](#react)
    - [Example Code](#example-code-2)
    - [Script Part](#script-part-2)
    - [If](#if)
    - [If Else](#if-else-2)
    - [Else If](#else-if)
    - [With an Expression ???](#with-an-expression-2)
    - [With a Method](#with-a-method-2)
    - [CSS `display`](#css-display-2)
    - [Switch Case](#switch-case-2)
    - [Caveats](#caveats-2)
  - [Scores](#scores)
  - [Differences](#differences)

## Vue

[https://vuejs.org/v2/guide/conditional.html](https://vuejs.org/v2/guide/conditional.html)

### Example Code
- [src/components/Condition.vue](../../examples/var-vue/src/components/Condition.vue)

### Script Part
```vue
<script>
export default {
  name: 'Condition',
  data() {
    return {
      isShow: true,
      option: 'Z',
      val: 10
    }
  },
  methods: {
    showIfEven(num) {
      return num % 2 === 0
    },
    toggle() {
      this.isShow = !this.isShow
      this.option = this.isShow ? 'A' : 'B'
      this.val = Math.floor(Math.random() * 20) + 1
    }
  },
  computed: {
    checkIsShow() {
      return this.val >= 10
    }
  }
}
</script>
```

### If Else
> 😁

```vue
<template>
  <div>
    <h3>If</h3>
    <div v-if="isShow">You can see me</div>
    <div v-if="!isShow">You can't see me</div>

    <h3>Else</h3>
    <div v-if="isShow">if isShow, you can see me</div>
    <div v-else>otherwise, you can't see me</div>

    <h3>Else If</h3>
    <div v-if="option === 'A'">A</div>
    <div v-else-if="option === 'B'">B</div>
    <div v-else-if="option === 'C'">C</div>
    <div v-else>Other</div>
  </div>
</template>
```

### With an Expression
> 😁

```vue
<template>
  <div>
     <div v-if="val >= 10">val is greater and equal to 10</div>
  </div>
</template>
```

### Without Showing a Root Element
> 😁

```vue
<template>
  <div>
    <p>woo</p>
    <template v-if="isShow">
      <p>foo</p>
      <p>bar</p>
    </template>
  </div>
</template>
```

### With a Method
> 😁

```vue
<template>
  <div>
    <div v-if="showIfEven(2)">You can see 2</div>
    <div v-if="showIfEven(1)">You can't see 1</div>
  </div>
</template>
```

### With a Computed Property
> 😎

```vue
<template>
  <div>
    <div v-if="checkIsShow">You can see 10</div>
  </div>
</template>
```

### CSS `display`
> 😁

```vue
<template>
  <div>
    <div v-show="isShow">You can see me</div>
  </div>
</template>
```

### Switch Case

> Sorry, but Vue doesn't have built-in switch-case directives right now. Use `v-if`, `v-else-if`, and `v-else` instead.

miller1990's plugin: [v-switch-case](https://github.com/lmiller1990/v-switch-case) (It only toggles css `display` attribute.)

### Caveats

- ⚠️ If the `v-if` blocks have similar structures, Vue will reuse elements to boost performance. That means most values and status will remain when the condition changed. You have to a add `key` to disable this mechanism if you don't want to reuse elements. ([Controlling Reusable Elements with key](https://vuejs.org/v2/guide/conditional.html#Controlling-Reusable-Elements-with-key))
- `v-if` will create or destroy DOM if we toggle the condition.
- `v-show` only toggles css `display` attribute. DOM is always there.

## Angular

[https://angular.io/guide/structural-directives](https://angular.io/guide/structural-directives)

### Example Code
- [src/app/components/condition/condition.component.html](../../examples/var-angular/src/app/components/condition/condition.component.html)
- [src/app/components/condition/condition.component.ts](../../examples/var-angular/src/app/components/condition/condition.component.ts)

### Script Part
```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent {
  isShow = true
  option = 'Z'
  val = 10

  showIfEven(num: number) {
    return num % 2 === 0
  }

  toggle() {
    this.isShow = !this.isShow
    this.option = this.isShow ? 'A' : 'B'
    this.val = Math.floor(Math.random() * 20) + 1
  }
}
```

### If Else
> 😁

```html
<h3>If</h3>
<div *ngIf="isShow">You can see me</div>
<div *ngIf="!isShow">You can't see me</div>

<h3>Else</h3>
<div *ngIf="isShow; else elseBlock">if isShow, you can see me</div>
<ng-template #elseBlock>
  <div>otherwise, you can't see me</div>
</ng-template>

<h3>Then Else</h3>
<ng-container *ngIf="isShow; then thenBlock; else elseBlock"></ng-container>
<ng-template #thenBlock>
  <div>if isShow, you can see me</div>
</ng-template>
<ng-template #elseBlock>
  <div>otherwise, you can't see me</div>
</ng-template>
```

### With an Expression
> 😁

```html
<div *ngIf="val >= 10">val is greater and equal to 10</div>
```

### Without Showing a Root Element
> 😁

```html
<p>woo</p>
<ng-container *ngIf="isShow">
  <p>foo</p>
  <p>bar</p>
</ng-container>
```

### With a Method
> 😁

```html
<div *ngIf="showIfEven(2)">You can see 2</div>
<div *ngIf="showIfEven(1)">You can't see 1</div>
```

### CSS `display`
> 😁

```html
<div [style.display]="isShow ? 'block' : 'none'">You can see me</div>
```

### Switch Case
> 😁

```html
<ng-container [ngSwitch]="option">
  <div *ngSwitchCase="'A'">A</div>
  <div *ngSwitchCase="'B'">B</div>
  <div *ngSwitchCase="'C'">C</div>
  <div *ngSwitchDefault>Other</div>
</ng-container>
```

### Caveats
- `*ngIf` will create or destroy DOM if we toggle the condition.
- You must use `ng-template` for `then` and `else` blocks.
- You can use multiple `ng-template`. ([Using an external then template](https://angular.io/api/common/NgIf#using-an-external-then-template)) However, it's way too complicated. Why don't you use `ngSwitch`?
- You can store the result in a variable using `as`, but it seems like only good for when using with `async` pipe. ([Storing a conditional result in a variable](https://angular.io/api/common/NgIf#storing-a-conditional-result-in-a-variable))

## React

[https://reactjs.org/docs/conditional-rendering.html](https://reactjs.org/docs/conditional-rendering.html)

### Example Code
- [src/components/Loop.js](../../examples/var-react/src/components/Condition.js)

### Script Part
```jsx
import React, { useState } from 'react'

function Condition() {
  const [isShow, setIsShow] = useState(true)
  const [option, setOption] = useState('Z')
  const [val, setVal] = useState(10)

  const showIfEven = (num) => {
    return num % 2 === 0
  }

  const toggle = () => {
    setIsShow(!isShow)
    setOption(isShow ? 'A' : 'B')
    setVal(Math.floor(Math.random() * 20) + 1)
  }
  ...
}
```

### If
> 😁

```jsx
let ifBlock = null
if (isShow) {
  ifBlock = <div>You can see me</div>
}

return (
  <div>
    {ifBlock}
  <div/>
)
```

Using `&&` operator
```jsx
return (
  <div>
    {isShow &&
      <div>
        You can see me
      </div>
    }
  <div/>
)
```

### If Else
> 😁

```jsx
let ifElseBlock = null
if (isShow) {
  ifElseBlock = <div>if isShow, you can see me</div>
} else {
  ifElseBlock = <div>otherwise, you can't see me</div>
}

return (
  <div>
    {ifElseBlock}
  <div/>
)
```

Using Ternary Operator
```jsx
return (
  <div>
    {isShow ? (
      <div>if isShow, you can see me</div>
    ) : (
      <div>otherwise, you can't see me</div>
    )}
  <div/>
)
```

Using early return
```jsx
if (!isShow) {
  return <div>You can see me</div>
}

return <div>You can't see me</div>
```

### Else If
> 🙄

```jsx
let elseIfBlock = null
if (option === 'A') {
  elseIfBlock = <div>A</div>
} else if (option === 'B') {
  elseIfBlock = <div>B</div>
} else if (option === 'C') {
  elseIfBlock = <div>C</div>
} else {
  elseIfBlock = <div>Other</div>
}

return (
  <div>
    {elseIfBlock}
  <div/>
)
```

### With an Expression ???
> 🙄

```jsx
return (
  <h3>With an Expression</h3>
  {val >= 10 &&
    <div>
      val is greater and equal to 10
    </div>
  }
)
```

### With a Method
> 😁

```jsx
let methodBlockA = null
if (showIfEven(2)) {
  methodBlockA = <div>You can see 2</div>
}
let methodBlockB = null
if (showIfEven(1)) {
  methodBlockB = <div>You can't see 1</div>
}

return (
  <div>
    {methodBlockA}
    {methodBlockB}
  <div/>
)
```

### CSS `display`
> 😁

```jsx
return (
  <div style={{ display: isShow ? 'block' : 'none' }}>
    You can see me
  </div>
)
```

### Switch Case
> 😁

```jsx
switch (option) {
  case 'A':
    return <div>A</div>
  case 'B':
    return <div>B</div>
  case 'C':
    return <div>C</div>
  default:
    return <div>Other</div >
}
```

```jsx
let switchCaseBlock = null
switch (option) {
  case 'A':
    switchCaseBlock = <div>A</div>
    break
  case 'B':
    switchCaseBlock = <div>B</div>
    break
  case 'C':
    switchCaseBlock = <div>C</div>
    break
  default:
    switchCaseBlock = <div>Other</div >
    break
}

return (
  <div>
    <header />
    {switchCaseBlock}
    <footer />
  <div/>
)
```

### Caveats
- In `JSX`, you can only use `{expression}` to form the template.
- You can only do other JS conditional statements at other places. Usually set them as variables, then use in `JSX`.
- If a method or an operator is able to return `JSX`, it's fine to use in the `{expression}`.
- You can use an array to concatenate JSX fragments, but the readability is probably not good.

## Scores
|                                |  Vue  | Angular | React |
| :----------------------------- | :---: | :-----: | :---: |
| If Else                        |  😁   |   😁    |  😁   |
| Else If                        |  😁   |   🙄    |  🙄   |
| With an Expression             |  😁   |   😁    |  🙄   |
| Without Showing a Root Element |  😁   |   😁    |  N/A  |
| With a Method                  |  😁   |   😁    |  😁   |
| With a Computed Property       |  😎   |   N/A   |  N/A  |
| CSS `display`                  |  😁   |   😁    |  😁   |
| Switch Case                    |  N/A  |   😁    |  😁   |

## Differences
|                       |           Vue           |               Angular                |   React   |
| :-------------------- | :---------------------: | :----------------------------------: | :-------: |
| power by              |        directive        |              directive               |    JSX    |
| if syntax             |   `v-if="condition"`    |         `*ngIf="condition"`          |   `if`    |
| else if syntax        | `v-else-if="condition"` |                 N/A                  | `else if` |
| else syntax           |        `v-else`         | `*ngIf="condition; then thenBlock;"` |  `else`   |
| switch syntax         |           N/A           |        `[ngSwitch]="option"`         | `switch`  |
| switch-case syntax    |           N/A           |     `*ngSwitchCase="'optionA'"`      |  `case`   |
| switch-default syntax |           N/A           |          `*ngSwitchDefault`          | `default` |
