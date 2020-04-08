# How to Use Props in V.A.R

> Props are the input data from the parent. The parent will do everything for children, so they can keep naive and silly.

> ⚠️Props are supposed to be one-way data flow. You shouldn't try to change props to affect the parent state.

## Vue

[https://vuejs.org/v2/guide/components-props.html](https://vuejs.org/v2/guide/components-props.html)

### Example Code
- [src/components/HeroPropsParent.vue](../../examples/var-vue/src/components/HeroPropsParent.vue)
- [src/components/HeroProps.vue](../../examples/var-vue/src/components/HeroProps.vue)

### Format 😁
`camelCase` in `JavaScript` field
```jsx
export default {
  name: 'HeroProps',
  props: {
    heroName: String
  }
}
```

`kebab-case` in `HTML` element attribute
```html
<hero-props :hero-name="name" />
```

### Passing Static Props From Parent Component 😁
`Parent Component`
```vue
<template>
  <hero-props hero-name="Riven" />

  <hero-props :hero-name="'Riven'" />
</template>

<script>
import HeroProps from './HeroProps'

export default {
  name: 'HeroPropsParent',
  components: {
    HeroProps
  }
}
</script>
```

### Passing Dynamic Props From Parent Component 😁
`Parent Component`
```vue
<template>
  <hero-props :hero-name="heroName" />
</template>

<script>
import HeroProps from './HeroProps'

export default {
  name: 'HeroPropsParent',
  data() {
    return {
      heroName: 'Riven'
    }
  },
  components: {
    HeroProps
  }
}
</script>
```

> `:hero-name` is the shorthand for `v-bind:hero-name`

> You can use `v-bind` to bind an object into props
>
> ```html
> <hero-props v-bind="hero" />
> ```
>
> is equal to
>
> ```html
> <hero-props
>   :name="hero.name"
>   :health="hero.health"
> />
> ```

### Prop Validation 😁
`Child Component`
```vue
<template>
  ...
</template>

<script>
export default {
  name: 'HeroProps',
  props: {
    heroName: String,
    // Multiple possible types
    foo: [String, Number],
    title: {
      type: String,
      // String with a default value
      default: 'Hero Title'
    },
    attackDamage: {
      type: Number,
      // Required prop
      required: true
    },
    health: {
      type: Number,
      // Number with a default value
      default: 0,
      // Custom validator
      // You can't access data or computed here
      validator (value) {
        return value > 0 && value < 99999
      }
    },
    skills: {
      type: Array,
      // Object or array needs a function
      default() {
        return []
      }
    }
  }
}
</script>
```

### Root Element Attribute Binding 😁
`Parent Component`
```html
<hero-props title="Super Hero" />
<hero-props :title="'Super' + ' Hero'" />

<hero-props class="highlight" />
<hero-props :class="isHighlight ? 'highlight' : null" />

<hero-props style="color: red" />
<hero-props :style="'color: red'" />
```

`Result`
```html
<div title="Super Hero">...</div>

<div class="highlight">...</div>

<div style="color: red;">...</div>
```

- [Props, data properties, methods, computed properties all share the same "namespace as they are all mapped to properties in the component instance.](https://forum.vuejs.org/t/questions-regarding-handling-immutable-props-and-mutable-data-props/967#post_2)
- Non-prop attributes will pass to the root element.
- Most of attributes will replace the default attributes in the child component.
- `class` and `style` attributes will merge the passing values and default values.
- Set `inheritAttrs: false` to disable passing non-prop attributes to the root element.
- Use `v-bind="$attrs"` to decide which element you want to forward non-prop attributes.

## Angular

[https://angular.io/guide/template-syntax#input-and-output-properties](https://angular.io/guide/template-syntax#input-and-output-properties)

### Example Code
- [src/app/components/hero-props-parent/hero-props-parent.component.ts](../../examples/var-angular/src/app/components/hero-props-parent/hero-props-parent.component.ts)
- [src/app/components/hero-props-parent/hero-props-parent.component.html](../../examples/var-angular/src/app/components/hero-props-parent/hero-props-parent.component.html)
- [src/app/components/hero-props/hero-props.component.ts](../../examples/var-angular/src/app/components/hero-props/hero-props.component.ts)
- [src/app/components/hero-props/hero-props.component.html](../../examples/var-angular/src/app/components/hero-props/hero-props.component.html)

### Format 😁
`camelCase` by default
```ts
export class HeroPropsComponent {
  @Input() heroName: string
}
```

```html
<app-hero-props [heroName]="name"></app-hero-props>
```

set an alias if you want to use `kebab-case` or another name
```ts
export class HeroPropsComponent {
  @Input('hero-name') heroName: number
}
```

```html
<app-hero-props [hero-name]="name"></app-hero-props>
```

### Passing Static Props From Parent Component 😁
`Parent Component`
```html
<app-hero-props name="Riven"></app-hero-props>

<app-hero-props [name]="'Riven'"></app-hero-props>
```

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-hero-props-parent',
  templateUrl: './hero-props-parent.component.html',
  styleUrls: ['./hero-props-parent.component.scss']
})
export class HeroPropsParentComponent { }
```

### Passing Dynamic Props From Parent Component 😁
`Parent Component`
```html
<app-hero-props [name]="name"></app-hero-props>
```

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-hero-props-parent',
  templateUrl: './hero-props-parent.component.html',
  styleUrls: ['./hero-props-parent.component.scss']
})
export class HeroPropsParentComponent {
  name = 'Riven'
}
```

### Prop Validation
There is no build-in validations for `Input()`. If you set types properly through TypeScript, it will warn you if you use the wrong type.

[How to Add Angular Component Input Validation](https://netbasal.com/how-to-add-angular-component-input-validation-b078a30af97f)

### Root Element Attribute Binding 😁
`Parent Component`
```html
<app-hero-props title="Super Hero"></app-hero-props>
<app-hero-props [attr.title]="'Super' + ' Hero'"></app-hero-props>

<app-hero-props class="highlight"></app-hero-props>
<app-hero-props [class.highlight]="isHighlight"></app-hero-props>

<app-hero-props style="color: red"></app-hero-props>
<app-hero-props [style.color]="isHighlight ? 'red' : 'green'"></app-hero-props>
```

`Result`
```html
<app-hero-props title="Super Hero">...</app-hero-props>

<app-hero-props class="highlight">...</app-hero-props>

<app-hero-props style="color: red;">...</app-hero-props>
```

## React

[https://reactjs.org/docs/components-and-props.html](https://reactjs.org/docs/components-and-props.html)

### Example Code
- [src/components/HeroPropsParent.js](../../examples/var-react/src/components/HeroPropsParent.js)
- [src/components/HeroPropsClass.js](../../examples/var-react/src/components/HeroPropsClass.js)
- [src/components/HeroPropsFunction.js](../../examples/var-react/src/components/HeroPropsFunction.js)

### Format 😁
`camelCase` by default
```jsx
import React from 'react'

function HeroProps({ heroName }) {
  return <h1>{heroName}</h1>
}

export default HeroProps
```

```jsx
<HeroProps heroName={name} />
```

set an alias if you want to use `kebab-case`
```jsx
import React from 'react'

function HeroProps({ 'hero-name': heroName }) {
  return <h1>{heroName}</h1>
}

export default HeroProps
```

```jsx
<HeroProps hero-name={name} />
```

### Passing Static Props From Parent Component 😁
`Parent Component`
```jsx
import React from 'react'

function HeroPropsParent() {
  return (
    <>
      <HeroProps heroName="Riven" />

      <HeroProps heroName={'Riven'} />
    </>
  )
}

export default HeroPropsParent
```

### Passing Dynamic Props From Parent Component 😁
`Parent Component`
```jsx
import React, { useState } from 'react'

function HeroPropsParent() {
  const [name, setName] = useState('Riven')
  return <HeroProps heroName={name} />
}

export default HeroPropsParent
```

### Prop Validation
[Typechecking With PropTypes](https://zh-hant.reactjs.org/docs/typechecking-with-proptypes.html)

PropTypes can do something really complex: [Validating React component props with prop-types](https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/)

```jsx
import PropTypes from 'prop-types'
import React from 'react'

function HeroProps(props) {
  ...
}

HeroProps.propTypes = {
  heroName: PropTypes.string,
  // Multiple possible types
  foo: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  title: PropTypes.string,
  // Required prop
  attackDamage: PropTypes.number.isRequired,
  // Custom validator
  health(props, propName, componentName) {
    const health = props[propName]
    if (!(health > 0 && health < 99999)) {
      return new Error('Invalid health range')
    }
  },
  skills: PropTypes.array
}

HeroProps.defaultProps = {
  // String with a default value
  title: 'Hero Title',
  // Number with a default value
  health: 0,
  // Array with a default value
  skills: []
}

export default HeroProps
```

### Root Element Attribute Binding
All attributes you put on a component will become props. React won't attach other HTML attributes to the root element.

## Scores
|                                |  Vue  | Angular | React |
| :----------------------------- | :---: | :-----: | :---: |
| Format                         |  😁   |   😁    |  😁   |
| Static Props                   |  😁   |   😁    |  😁   |
| Dynamic Props                  |  😁   |   😁    |  😁   |
| Validation                     |  😁   |   N/A   |  😁   |
| Root Element Attribute Binding |  😁   |   😁    |  N/A  |

## Differences
- Vue
  - Static Props: `<hero-props name="Riven" />`
  - Dynamic Props: `<hero-props :name="name" />`
- Angular
  - Static Props: `<hero-props name="Riven"></hero-props>`
  - Dynamic Props: `<hero-props [name]="name"></hero-props>`
- React
  - Static Props: `<HeroProps name="Riven" />`
  - Dynamic Props: `<HeroProps name={name} />`
