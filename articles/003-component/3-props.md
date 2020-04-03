# How to Use Props in V.A.R

> Props are the input data from the parent. The parent will do everything for children, so they can keep naive and silly.

> ⚠️Props are supposed to be one-way data flow. You shouldn't try to change props to affect the parent state.

## Vue

[https://vuejs.org/v2/guide/components-props.html](https://vuejs.org/v2/guide/components-props.html)

### Example Code
- [src/components/HeroParent.vue](../../examples/var-vue/src/components/HeroParent.vue)
- [src/components/HeroProps.vue](../../examples/var-vue/src/components/HeroProps.vue)

### Casing 😁
> `camelCase` in `JavaScript` (child component)
> > `props: ['heroName']`
>
> `kebab-case` in `HTML` (parent component)
>  > `<hero-props hero-name="Riven" />`

`Child Component`
```vue
<template>
  <h1>{{heroName}}</h1>
</template>

<script>
export default {
  name: 'HeroProps',
  props: {
    heroName: String
  }
}
</script>
```

### Passing Static Props From Parent Component 😁
`Parent Component`
```vue
<template>
  <hero-props hero-name="Riven" />
</template>

<script>
import HeroProps from './HeroProps'

export default {
  name: 'HeroParent',
  components: {
    HeroProps
  }
}
</script>
```

> ⚠️Static Props will turn everything into string.

### Passing Dynamic Props From Parent Component 😁
`Parent Component`
```vue
<template>
  <hero-props :hero-name="heroName" />
</template>

<script>
import HeroProps from './HeroProps'

export default {
  name: 'HeroParent',
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

### Caveats
- Non-prop attributes will pass to the root element.
- Most of attributes will replace the default attributes in the child component.
- `class` and `style` attributes will merge the passing and default attributes.
- Set `inheritAttrs: false` to disable passing non-prop attributes to the root element.
- Use `v-bind="$attrs"` to decide which element you want to forward non-prop attributes

## Scores
|               |  Vue  | Angular | React |
| :------------ | :---: | :-----: | :---: |
| Format        |  😁   |   😁    |  😁   |
| Static Props  |  😁   |   😁    |  😁   |
| Dynamic Props |  😁   |   😁    |  😁   |
| Validation    |  😁   |   😁    |  😁   |

## Differences
|               |              Vue              |                  Angular                  |             React              |
| :------------ | :---------------------------: | :---------------------------------------: | :----------------------------: |
| Static Props  | `<hero-props name="Riven" />` | `<hero-props name="Riven"></hero-props>`  | `<HeroProps name={'Riven'} />` |
| Dynamic Props | `<hero-props :name="name" />` | `<hero-props [name]="name"></hero-props>` |  `<HeroProps name={name} />`   |

## Conclusions
