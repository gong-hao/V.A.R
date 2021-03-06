# How to Use Event Handler in V.A.R

> Event Handlers are the hooks from the children. Children will cry, shout, or throw away the pacifiers to get attention from the parent. Those cute babies won't care how the parent handles it, but the parent must do something.

> Here is talking about the events between the parent and child components. Check [here](../002-template-syntax/4-event.md) to see how to use events on a template.

- [How to Use Event Handler in V.A.R](#how-to-use-event-handler-in-var)
  - [Vue](#vue)
    - [Example Code](#example-code)
    - [Event Communication](#event-communication)
  - [Angular](#angular)
    - [Example Code](#example-code-1)
    - [Event Communication](#event-communication-1)
  - [React](#react)
    - [Example Code](#example-code-2)
    - [Event Communication](#event-communication-2)
  - [Scores](#scores)
  - [Differences](#differences)

## Vue

> Vue uses `this.$emit('event-name', eventArgs)` to notify the parent component.
>
> The parent uses `<component-name @event-name="methodName($event)" />` to listen to the event from child components.

> `@event-name="methodName($event)"` is the shorthand of `v-on:event-name="methodName($event)"`

[https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event](https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event)

[https://vuejs.org/v2/guide/components-custom-events.html](https://vuejs.org/v2/guide/components-custom-events.html)

### Example Code
- [src/components/HeroEvent.vue](../../examples/var-vue/src/components/HeroEvent.vue)
- [src/components/HeroEventParent.vue](../../examples/var-vue/src/components/HeroEventParent.vue)
- [src/components/HeroCheck.vue](../../examples/var-vue/src/components/HeroCheck.vue)
- [src/components/HeroCheckParent.vue](../../examples/var-vue/src/components/HeroCheckParent.vue)

### Event Communication
> 😁

`Child Component`
```vue
<template>
  <div @click="toggleChecked()">
    <span v-if="isChecked">☑</span>
    <span v-if="!isChecked">☐</span>
  </div>
</template>

<script>
export default {
  name: 'HeroCheck',
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    toggleChecked() {
      this.isChecked = !this.isChecked
      this.$emit('check-changes', this.isChecked)
    }
  }
}
</script>
```

`Parent Component`
```vue
<template>
  <div>
    {{isChecked ? '☑' : '☐'}}
    <hero-check @check-changes="onCheckChanges($event)" />
  </div>
</template>

<script>
import HeroCheck from './HeroCheck'

export default {
  name: 'HeroCheckParent',
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    onCheckChanges(isChecked) {
      this.isChecked = isChecked
    }
  },
  components: {
    HeroCheck
  }
}
</script>
```

## Angular

> Angular uses `@Output() eventName = new EventEmitter<T>()` and `this.eventName.emit(eventArgs)` to notify the parent component.
>
> The parent uses `<app-component-name (eventName)="methodName($event)"></app-component-name>` to listen to the event from child components.

[https://angular.io/guide/template-syntax#how-to-use-output](https://angular.io/guide/template-syntax#how-to-use-output)

### Example Code
- [src/app/components/hero-event/hero-event.component.ts](../../examples/var-angular/src/app/components/hero-event/hero-event.component.ts)
- [src/app/components/hero-event/hero-event.component.html](../../examples/var-angular/src/app/components/hero-event/hero-event.component.html)
- [src/app/components/hero-event-parent/hero-event-parent.component.ts](../../examples/var-angular/src/app/components/hero-event-parent/hero-event-parent.component.ts)
- [src/app/components/hero-event-parent/hero-event-parent.component.html](../../examples/var-angular/src/app/components/hero-event-parent/hero-event-parent.component.html)
- [src/app/components/hero-check/hero-check.component.ts](../../examples/var-angular/src/app/components/hero-check/hero-check.component.ts)
- [src/app/components/hero-check/hero-check.component.html](../../examples/var-angular/src/app/components/hero-check/hero-check.component.html)
- [src/app/components/hero-check-parent/hero-check-parent.component.ts](../../examples/var-angular/src/app/components/hero-check-parent/hero-check-parent.component.ts)
- [src/app/components/hero-check-parent/hero-check-parent.component.html](../../examples/var-angular/src/app/components/hero-check-parent/hero-check-parent.component.html)

### Event Communication
> 😁

`Child Component`
```html
<div (click)="toggleChecked()">
  <span *ngIf="isChecked">☑</span>
  <span *ngIf="!isChecked">☐</span>
</div>
```

```ts
import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-hero-check',
  templateUrl: './hero-check.component.html',
  styleUrls: ['./hero-check.component.scss']
})
export class HeroCheckComponent {
  @Output() checkChanges = new EventEmitter<boolean>()
  isChecked = false

  toggleChecked() {
    this.isChecked = !this.isChecked
    this.checkChanges.emit(this.isChecked)
  }
}
```

`Parent Component`
```html
{{isChecked ? '☑' : '☐'}}
<app-hero-check (checkChanges)="onCheckChanges($event)"></app-hero-check>
```

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-hero-check-parent',
  templateUrl: './hero-check-parent.component.html',
  styleUrls: ['./hero-check-parent.component.scss']
})
export class HeroCheckParentComponent {
  isChecked = false

  onCheckChanges(isChecked: boolean) {
    this.isChecked = isChecked
  }
}
```

## React

> React uses callback function from `props` to notify the parent component.
>
> The parent uses `<ComponentName eventName={methodName} />` to pass a callback function to child components.

[https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)

[https://reactjs.org/docs/faq-functions.html](https://reactjs.org/docs/faq-functions.html)

### Example Code
- [src/components/HeroEventFunction.js](../../examples/var-react/src/components/HeroEventFunction.js)
- [src/components/HeroEventClass.js](../../examples/var-react/src/components/HeroEventClass.js)
- [src/components/HeroEventParent.js](../../examples/var-react/src/components/HeroEventParent.js)
- [src/components/HeroCheckFunction.js](../../examples/var-react/src/components/HeroCheckFunction.js)
- [src/components/HeroCheckClass.js](../../examples/var-react/src/components/HeroCheckClass.js)
- [src/components/HeroCheckParent.js](../../examples/var-react/src/components/HeroCheckParent.js)

### Event Communication
> 🙂

`Child Component`
```jsx
import React, { useState } from 'react'

function HeroCheckFunction({
  onCheckChanges
}) {
  const [isChecked, setIsChecked] = useState(false)
  function toggleChecked() {
    const newIsChecked = !isChecked
    setIsChecked(newIsChecked)
    onCheckChanges(newIsChecked)
  }
  return (
    <div onClick={toggleChecked}>
      {isChecked ? <span>☑</span> : <span>☐</span>}
    </div>
  )
}

export default HeroCheckFunction
```

`Parent Component`
```jsx
import React, { useState } from 'react'

import HeroCheckFunction from './HeroCheckFunction'

function HeroCheckParent() {
  const [isChecked, setIsChecked] = useState(false)
  function onCheckChanges(isChecked) {
    setIsChecked(isChecked)
  }
  return (
    <>
      {isChecked ? '☑' : '☐'}
      <HeroCheckFunction onCheckChanges={onCheckChanges} />
    </>
  )
}

export default HeroCheckParent
```

## Scores
|                     |  Vue  | Angular | React |
| :------------------ | :---: | :-----: | :---: |
| Event Communication |  😁   |   😁    |  🙂   |

## Differences
- Vue
  - Child: `this.$emit('event-name', eventArgs)`
  - Parent: `<hero-event @event-name="methodName($event)" />`
- Angular
  - Child: `@Output() eventName = new EventEmitter<T>()` then `this.eventName.emit(eventArgs)`
  - Parent: `<app-hero-event (eventName)="methodName($event)"></app-hero-event>`
- React
  - Child: `this.props.eventName(eventArgs)`
  - Parent: `<HeroEvent eventName={methodName} />`
