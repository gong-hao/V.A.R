# How to Handle Events in V.A.R

> If your code does nothing without showing bugs, you probably forgot to call some methods.

## Vue

[https://vuejs.org/v2/guide/events.html](https://vuejs.org/v2/guide/events.html)

### Example Code
- [src/components/Condition.vue](../../examples/var-vue/src/components/Event.vue)

### Script Part
```vue
<script>
</script>
```

### With Handler Reference
```vue
<template>
  <div>
    <button @click="onClick">Click</button>
  </div>
</template>
```

### With a Expression
```vue
<template>
  <div>
    <button @click="num += 10; doSomething();">Click</button>
  </div>
</template>
```

### With Parameters
```vue
<template>
  <div>
    <button @click="onClick('foo', true)">Click</button>
  </div>
</template>
```

### With the Event Parameter
```vue
<template>
  <div>
    <button @click="onClick($event)">Click</button>
  </div>
</template>
```

### Event Modifiers
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
    <div>
      <p>Stop propagation to parents and children</p>
      <div @click="foo">
        first
        <div @click.stop="foo">
          second
          <div @click="foo">
            third
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>Prevent to open the link</p>
      <a @click.prevent="foo"></a>
      <p>Prevent to submit the form (reload page)</p>
      <form @submit.prevent="foo"></form>
    </div>
    <div>
      <p>Bubbling and capturing</p>
      <ul @click="callback($event, 'bubbling')" @click.capture="callback($event, 'capturing')">
        <li @click="callback($event, 'bubbling')" @click.capture="callback($event, 'capturing')">One</li>
        <ul @click="callback($event, 'bubbling')" @click.capture="callback($event, 'capturing')">
          <li @click="callback($event, 'bubbling')" @click.capture="callback($event, 'capturing')">Two</li>
          <ul @click="callback($event, 'bubbling')" @click.capture="callback($event, 'capturing')">
            <li @click="callback($event, 'bubbling')" @click.capture="callback($event, 'capturing')">Three</li>
          </ul>
        </ul>
      </ul>
    </div>
    <div>
      <p>Only the target can trigger the handler</p>
      <div @click="foo">
        first
        <div @click.self="foo">
          second
          <div @click="foo">
            third
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>Only works once</p>
      <p>
        <a @click.prevent.once href="https://www.google.com/">Google</a>
      </p>
      <p>
        <button @click.once="onePunch">Click</button>
      </p>
    </div>
    <div>
      <a @click.stop="doThis"></a>
    </div>
  </div>
</template>
```

### Key Modifiers
```vue
<template>
  <div>
    <p>With key name</p>
    <input @keyup.enter="onSubmit">
    <p>With key code</p>
    <input @keyup.13="onSubmit">
    <p>With system key</p>
    <input @keyup.shift.enter="onNewLine">
    <p>With exact system key</p>
    <input @keyup.shift.enter.exact="onNewLine">
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
-
### Mouse Button Modifiers
```vue
<template>
  <div>
    <button @click.right="onRightClick">Right Click</button>
  </div>
</template>
```

- `.left`
- `.right`
- `.middle`

## Angular

[https://angular.io/guide/template-syntax#event-binding](https://angular.io/guide/template-syntax#event-binding)

### Example Code
- [src/app/components/event/event.component.html](../../examples/var-angular/src/app/components/event/event.component.html)
- [src/app/components/event/event.component.ts](../../examples/var-angular/src/app/components/event/event.component.ts)

### Script Part
```ts
```

### Key Event Filtering
```html
<input #userInput (keyup.enter)="onEnter(userInput.value)">
```

[https://angular.io/guide/user-input#key-event-filtering-with-keyenter](https://angular.io/guide/user-input#key-event-filtering-with-keyenter)

### Modifiers

> Sorry, but Angular doesn't have built-in modifiers except `Key Event Filtering`.

You can implement them yourself:
- [Creating A Vue.js Inspired Event-Modifier DOM Plug-In In Angular 7.1.4 By Ben Nadel](https://www.bennadel.com/blog/3554-creating-a-vue-js-inspired-event-modifier-dom-plug-in-in-angular-7-1-4.htm)
- [Implementing Event Modifiers in Angular By Netanel Basal](https://netbasal.com/implementing-event-modifiers-in-angular-87e1a07969ce)

## React

[https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)

### Example Code
- [src/components/Loop.js](../../examples/var-react/src/components/Condition.js)

### Script Part
```jsx
```

### Modifiers

> Of course, not. Do it yourself. 🙄
