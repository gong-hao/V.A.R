# How to Use State in V.A.R

> State is the core data that represents the genuine meanings of information of the application.

## Vue

### Example Code
- [src/components/HeroStateComponent.vue](../../examples/var-vue/src/components/HeroStateComponent.vue)

### Using `data` 😁

```vue
<template>
  <div>
    <h1>{{name}}</h1>
    <h3>Health: {{health}}</h3>
    <h3>Attack Damage: {{attackDamage}}</h3>
    <ul>
      <li v-for="skill in skills" :key="skill.id">
        {{skill.name}}
        <span v-if="skill.key">[{{skill.key}}]</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
  data() {
    return {
      name: 'Riven',
      title: 'The Exile',
      health: 560,
      attackDamage: 64,
      skills: [
        { id: 1, name: 'Runic Blade', key: null },
        { id: 2, name: 'Broken Wings', key: 'q' },
        { id: 3, name: 'Ki Burst', key: 'w' },
        { id: 4, name: 'Valor', key: 'e' },
        { id: 5, name: 'Blade of the Exile', key: 'r' },
        { id: 6, name: 'Wind Slash', key: 'r' }
      ]
    }
  }
}
</script>
```

### Using `computed` 😁

```vue
<template>
  <div>
    <h1>{{description}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
  data() {
    return {
      name: 'Riven',
      title: 'The Exile'
    }
  },
  computed: {
    description() {
      return this.name.toUpperCase() + ' - ' + this.title.toUpperCase()
    }
  }
}
</script>
```

## Angular

### Example Code
- [src/app/components/hero-state/hero-state.component.ts](../../examples/var-angular/src/app/components/hero-state/hero-state.component.ts)
- [src/app/components/hero-state/hero-state.component.html](../../examples/var-angular/src/app/components/hero-state/hero-state.component.html)

### Using `class property` 😁

```html
<h1>{{name}}</h1>
<h3>Health: {{health}}</h3>
<h3>Attack Damage: {{attackDamage}}</h3>
<ul>
  <li *ngFor="let skill of skills">
    {{skill.name}}
    <span *ngIf="skill.key">[{{skill.key}}]</span>
  </li>
</ul>
```

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  name = 'Riven'
  title = 'The Exile'
  health = 560
  attackDamage = 64
  skills = [
    { id: 1, name: 'Runic Blade', key: null },
    { id: 2, name: 'Broken Wings', key: 'q' },
    { id: 3, name: 'Ki Burst', key: 'w' },
    { id: 4, name: 'Valor', key: 'e' },
    { id: 5, name: 'Blade of the Exile', key: 'r' },
    { id: 6, name: 'Wind Slash', key: 'r' }
  ]
}
```

## React

### Example Code
- [src/components/HeroStateFunction.js](../../examples/var-react/src/components/HeroStateFunction.js)
- [src/components/HeroStateClass.js](../../examples/var-react/src/components/HeroStateClass.js)
-
### Using `useState` (Function Component) 😑

```js
import React, { useState } from 'react'

function Hero() {
  const [name, setName] = useState('Riven')
  const [title, setTitle] = useState('The Exile')
  const [health, setHealth] = useState(560)
  const [attackDamage, setAttackDamage] = useState(64)
  const [skills, setSkills] = useState([
    { id: 1, name: 'Runic Blade', key: null },
    { id: 2, name: 'Broken Wings', key: 'q' },
    { id: 3, name: 'Ki Burst', key: 'w' },
    { id: 4, name: 'Valor', key: 'e' },
    { id: 5, name: 'Blade of the Exile', key: 'r' },
    { id: 6, name: 'Wind Slash', key: 'r' }
  ])

  return (
    <>
      <h1>{name}</h1>
      <h3>Health: {health}</h3>
      <h3>Attack Damage: {attackDamage}</h3>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            {skill.name}
            {skill.key ? <span>[{skill.key}]</span> : null}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Hero
```

### Using `state property` (Class Component) 😑

```js
import React from 'react'

class HeroClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Riven',
      title: 'The Exile',
      health: 560,
      attackDamage: 64,
      skills: [
        { id: 1, name: 'Runic Blade', key: null },
        { id: 2, name: 'Broken Wings', key: 'q' },
        { id: 3, name: 'Ki Burst', key: 'w' },
        { id: 4, name: 'Valor', key: 'e' },
        { id: 5, name: 'Blade of the Exile', key: 'r' },
        { id: 6, name: 'Wind Slash', key: 'r' }
      ]
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h3>Health: {this.state.health}</h3>
        <h3>Attack Damage: {this.state.attackDamage}</h3>
        <ul>
          {this.state.skills.map(skill => {
            return (
              <li key={skill.id}>
                {skill.name}
                {skill.key ? <span>[{skill.key}]</span> : null}
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default HeroClass
```

> You can use the `class fields` to initialize the state to get rid of `constructor`, but it's not the standard yet.
>
> [The constructor is dead, long live the constructor!](https://hackernoon.com/the-constructor-is-dead-long-live-the-constructor-c10871bea599)

```js
import React from 'react'

class HeroClass extends React.Component {
  state = {
    name: 'Riven',
    title: 'The Exile',
    health: 560,
    attackDamage: 64,
    skills: [
      { id: 1, name: 'Runic Blade', key: null },
      { id: 2, name: 'Broken Wings', key: 'q' },
      { id: 3, name: 'Ki Burst', key: 'w' },
      { id: 4, name: 'Valor', key: 'e' },
      { id: 5, name: 'Blade of the Exile', key: 'r' },
      { id: 6, name: 'Wind Slash', key: 'r' }
    ]
  }

  ...
}

export default HeroClass
```

## Scores
|           |  Vue  | Angular | React |
| :-------- | :---: | :-----: | :---: |
| intuitive |  😁   |   😁    |  😑   |

## Conclusions
- Vue and Angular use `reactive` state, which means once the data changed, the template will be re-rendered automatically. It looks more intuitive and easy.
- You will see `expression has changed after it was checked` when you play Angular with some fancy ways.
  - [Everything you need to know about the `ExpressionChangedAfterItHasBeenCheckedError` error](https://indepth.dev/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error/)
- React strictly follow the one-way data flow, so we have to use `setState` to change the state. Directly change the state like `this.state.foo = 'bar'` will not work. It looks ugly, but React believes that's why it so fast, so it's necessary evil.
  - `useState` is a hook for `Function Component`.
  - `state property` is the traditional way for `Class Component`.
