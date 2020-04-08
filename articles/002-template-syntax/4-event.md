# How to Handle Events in V.A.R

> If your code does nothing without showing bugs, you probably forgot to call some methods.

## Vue

[https://vuejs.org/v2/guide/events.html](https://vuejs.org/v2/guide/events.html)

> `@click="onClick()"` is the shorthand of `v-on:click="onClick()"`

### Example Code
- [src/components/Condition.vue](../../examples/var-vue/src/components/Event.vue)

### Script Part
```vue
<script>
export default {
  name: 'Event',
  data() {
    return {
      val: 10
    }
  },
  methods: {
    addVal() {
      this.val += Number(this.$refs.userInput.value) || 0
    },
    addWithVal(val) {
      this.val += Number(val) || 0
    },
    hi(event) {
      alert(`${event.type} event`)
    },
    foo(event, memo) {
      console.log(event.currentTarget, memo)
    }
  }
}
</script>
```

### With Handler Reference 😁
```vue
<template>
  <div>
    <button @click="addVal">Add Value</button>
  </div>
</template>
```

### With Invoking Handler 😁
```vue
<template>
  <div>
    <button @click="addVal()">Add Value</button>
  </div>
</template>
```

### With an Expression 😁
```vue
<template>
  <div>
    <button @click="val += Number($refs.userInput.value) || 0">Add Value</button>
  </div>
</template>
```

### With Parameters 😁
```vue
<template>
  <div>
    <button @click="addWithVal($refs.userInput.value)">Add Value</button>
  </div>
</template>
```

### With the Event Parameter 😁
```vue
<template>
  <div>
    <button @click="hi">Click</button>
    <button @click="hi($event)">Click</button>
  </div>
</template>
```

### Event Modifiers 😎
- `.stop` - Description: Stop event propagation
  - `event.stopPropagation()`
- `.prevent` - Description: Prevent default behavior
  - `event.preventDefault()`
- `.capture` - Description: Listen event in capture phase
  - `addEventListener(eventName, listener, { capture : true })`
- `.self` - Description: Only the target can trigger the handler
  - `event.target === event.currentTarget`
- `.once` - Description: Only works once
  - call `removeEventListener()` once invoked
- `.passive` - Description: Skip `preventDefault` checking in propagation ([makes touch events scroll smoothly](https://www.youtube.com/watch?v=NPM6172J22g))
  - `addEventListener(eventName, listener, { passive : true })`

```vue
<template>
  <div>
    <p>Stop propagation</p>
    <div class="first" @click="foo">
      first
      <div class="second" @click.stop="foo">
        second
        <div class="third" @click="foo">third</div>
      </div>
    </div>

    <p>Prevent to open the link</p>
    <a @click.prevent="foo" href="https://www.google.com/">Google</a>

    <p>Prevent to submit the form (reload page)</p>
    <form @submit.prevent="foo">
      <input type="text" name="bar" />
      <button type="submit">Submit</button>
    </form>

    <p>Bubbling and capturing</p>
    <ul
      class="first-ul"
      @click="foo($event, 'default')"
      @click.capture="foo($event, 'capture')"
    >
      <li
        class="first-li"
        @click="foo($event, 'default')"
        @click.capture="foo($event, 'capture')"
      >One</li>
      <ul
        class="second-ul"
        @click="foo($event, 'default')"
        @click.capture="foo($event, 'capture')"
      >
        <li
          class="second-li"
          @click="foo($event, 'default')"
          @click.capture="foo($event, 'capture')"
        >Two</li>
        <ul
          class="third-ul"
          @click="foo($event, 'default')"
          @click.capture="foo($event, 'capture')"
        >
          <li
            class="third-li"
            @click="foo($event, 'default')"
            @click.capture="foo($event, 'capture')"
          >Three</li>
        </ul>
      </ul>
    </ul>

    <p>Only the target can trigger the handler</p>
    <div class="first" @click.self="foo">
      first
      <div class="second" @click.self="foo">
        second
        <div class="third" @click.self="foo">third</div>
      </div>
    </div>

    <p>Only works once</p>
    <a @click.prevent.once href="https://www.google.com/">Google</a>
    <button @click.once="foo">Click</button>
  </div>
</template>
```

### Key Modifiers 😎
```vue
<template>
  <div>
    <p>With key name</p>
    <input @keyup.enter="foo">
    <p>With key code</p>
    <input @keyup.13="foo">
    <p>With system key</p>
    <input @keyup.shift.enter="foo">
    <p>With exact system key</p>
    <input @keyup.shift.enter.exact="foo">
  </div>
</template>
```

Aliases for the most commonly used key codes:
- `.enter`
- `.tab`
- `.delete` (`Delete` and `Backspace`)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

### Mouse Button Modifiers 😎
```vue
<template>
  <div>
    <button @click.right="hi">Right Click</button>
  </div>
</template>
```

- `.left`
- `.right`
- `.middle`

### Caveats
- keyCode is Deprecated. ([KeyboardEvent.keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)) But, I think browsers will still support it due to a lot of legacy JS code using keyCode.
- Modifiers are chainable and the order matters.

## Angular

[https://angular.io/guide/template-syntax#event-binding-event](https://angular.io/guide/template-syntax#event-binding-event)

### Example Code
- [src/app/components/event/event.component.html](../../examples/var-angular/src/app/components/event/event.component.html)
- [src/app/components/event/event.component.ts](../../examples/var-angular/src/app/components/event/event.component.ts)


### Script Part
```ts
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @ViewChild('userInput') userInputRef: ElementRef

  val = 10
  number = Number

  addVal() {
    this.val += Number(this.userInputRef.nativeElement.value) || 0
  }

  addWithVal(val: string) {
    this.val += Number(val) || 0
  }

  hi(event: Event) {
    alert(`${event.type} event`)
  }

  foo(event: Event, memo: string) {
    console.log(event.currentTarget, memo)
  }
}
```

### With Handler Reference

> No, you can't

### With Invoking Handler 😁
```html
<button (click)="addVal()">Add Value</button>
```

### With an Expression 🙂
```html
<button (click)="val = val + (number(userInput.value) || 0)">Add Value</button>
```

> `new`, `++`, `--`, `+=`, `-=`, `|`, `&` and pipe are not supported. [Template statements](https://angular.io/guide/template-syntax#template-statements)

### With Parameters 😁
```html
<button (click)="addWithVal(userInput.value)">Add Value</button>
```

### With the Event Parameter 😁
```html
<button (click)="hi($event)">Hi</button>
```

### Key Event Filtering 😎

[https://angular.io/guide/user-input#key-event-filtering-with-keyenter](https://angular.io/guide/user-input#key-event-filtering-with-keyenter)

```html
<input (keyup.enter)="hi($event)">
```

### Modifiers

> Sorry, but Angular doesn't have built-in modifiers except `Key Event Filtering`.

You can implement them yourself:
- [Creating A Vue.js Inspired Event-Modifier DOM Plug-In In Angular 7.1.4 By Ben Nadel](https://www.bennadel.com/blog/3554-creating-a-vue-js-inspired-event-modifier-dom-plug-in-in-angular-7-1-4.htm)
- [Implementing Event Modifiers in Angular By Netanel Basal](https://netbasal.com/implementing-event-modifiers-in-angular-87e1a07969ce)

### Caveats
- You can customize events with `EventEmitter`. ([Custom events with EventEmitter](https://angular.io/guide/template-syntax#custom-events-with-eventemitter))

## React

[https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)

[https://reactjs.org/docs/faq-functions.html](https://reactjs.org/docs/faq-functions.html)

### Example Code
- [src/components/Loop.js](../../examples/var-react/src/components/Condition.js)

### Script Part
```jsx
import React, { useRef, useState } from 'react'

function Event() {
  const [val, setVal] = useState(10)
  const userInput = useRef()

  function addVal() {
    setVal(val + (Number(userInput.current.value) || 0))
  }

  function addWithVal(_val) {
    setVal(val + (Number(_val) || 0))
  }

  function hi(event) {
    alert(`${event.type} event`)
  }

  function foo(event, memo) {
    console.log(event.currentTarget, memo)
  }
  ...
}
```

### With Handler Reference 😁
```jsx
<button onClick={addVal}>Add Value</button>
```

### With Invoking Handler 😁
```jsx
<button onClick={() => addVal()}>Add Value</button>
```

### With an Expression 😁
```jsx
<button onClick={() => setVal(val + (Number(userInput.current.value) || 0))}>Add Value</button>
```

### With Parameters 😁
```jsx
<button onClick={() => addWithVal(userInput.current.value)}>Add Value</button>
```

### With the Event Parameter 😁
```jsx
<>
  <button onClick={hi}>Hi</button>
  <button onClick={event => hi(event)}>Hi</button>
</>
```

### Modifiers

> Of course, not. Do it yourself.

### Caveats
- This example uses `functional component`. If you use `class component`, you will face `this` issue. [This is why we need to bind event handlers in Class Components in React](https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/)
- You have to use `preventDefault` explicitly. `return false` won't work.

## Scores
|                          |  Vue  | Angular | React |
| :----------------------- | :---: | :-----: | :---: |
| With Handler Reference   |  😁   |   N/A   |  😁   |
| With Invoking Handler    |  😁   |   😁    |  😁   |
| With an Expression       |  😁   |   🙂    |  😁   |
| With Parameters          |  😁   |   😁    |  😁   |
| With the Event Parameter |  😁   |   😁    |  😁   |
| Event Modifiers          |  😎   |   N/A   |  N/A  |
| Key Modifiers            |  😎   |   😁    |  N/A  |
| Mouse Button Modifiers   |  😎   |   N/A   |  N/A  |

## Differences
|                   | Vue                             | Angular                          | React                                 |
| :---------------- | :------------------------------ | :------------------------------- | :------------------------------------ |
| power by          | directive                       | template syntax                  | JSX                                   |
| event name        | `lowercase` : keyup             | `lowercase` : keyup              | `on` + `CamelCase` : onKeyUp          |
| ref syntax        | `@click="clickHandler"`         | N/A                              | `onClick={clickHandler}`              |
| invoking syntax   | `@click="clickHandler()"`       | `(click)="clickHandler()"`       | `onClick={() => clickHandler()}`      |
| parameters syntax | `@click="clickHandler(param)"`  | `(click)="clickHandler(param)"`  | `onClick={() => clickHandler(param)}` |
| event syntax      | `@click="clickHandler($event)"` | `(click)="clickHandler($event)"` | `onClick={e => clickHandler(e)}`      |
| expression syntax | `@click="expression"`           | `(click)="expression"`           | `onClick={() => expression}`          |
| modifiers         | Yes                             | N/A                              | N/A                                   |
