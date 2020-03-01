# How to loop an array in V.A.R

> Loop saves everyone's life. A genuine hero.

## Vue

> Vue uses `v-for` directive.

[https://vuejs.org/v2/guide/list.html](https://vuejs.org/v2/guide/list.html)

### Example Code
- [src/components/Loop.vue](../../examples/var-vue/src/components/Loop.vue)

> `:key="item.id"` is the shorthand of `v-bind:key="item.id"` ([v-bind Shorthand](https://vuejs.org/v2/guide/syntax.html#v-bind-Shorthand)).

### Script Part
```vue
<script>
import LoopItem from './LoopItem.vue'
export default {
  name: 'Loop',
  data() {
    return {
      items: [
        { id: 1, text: 'foo' },
        { id: 2, text: 'bar' },
        { id: 3, text: 'woo' }
      ],
      person: {
        name: 'Gordon',
        age: 18,
        power: 999,
        isSuper: true
      }
    }
  },
  components: {
    LoopItem
  }
}
</script>
```

### Array Rendering
```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{item.text}}</li>
  </ul>
</template>
```

### Object Rendering
```vue
<template>
  <ul>
    <li v-for="(item, key) in person" :key="key">{{person[key]}}</li>
  </ul>
</template>
```

> The order of keys is based on the enumeration order of `Object.keys()`

### Times Rendering
```vue
<template>
  <ul>
    <li v-for="x in 3" :key="x">{{x}}</li>
  </ul>
</template>
```

### Characters Rendering
```vue
<template>
  <ul>
    <li v-for="(c, index) in 'Good'" :key="index">{{c}}</li>
  </ul>
</template>
```

### Alias
```vue
<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        index: {{index}} | text: {{item.text}}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="(item, name, index) in person" :key="name">
        index: {{index}} | name: {{name}} | value: {{person[name]}}
      </li>
    </ul>
  </div>
</template>
```

> `v-for="(item, name, index) in obj"` and `v-for="(item, key, index) in obj"` are interchangeable.

### Without Showing a Root Element
```vue
<template>
  <ul>
    <template v-for="(item, index) in items">
      <li :key="item.id">index: {{index}}</li>
      <li :key="item.id">text: {{item.text}}</li>
    </template>
  </ul>
</template>
```

> Why can't I set `:key` on the `<template>`? [V-for on templates](https://forum.vuejs.org/t/v-for-on-templates/8359/3)

### With a Component
```vue
<template>
  <ul>
    <LoopItem v-for="(item, index) in items" :key="item.id" :item="item" :index="index" />
  </ul>
</template>
```

### Caveats

- It's not recommended to use `v-if` and `v-for` together ([v-for with v-if](https://vuejs.org/v2/guide/list.html#v-for-with-v-if)).
- `v-for` has a higher priority than `v-if`.

## Angular

> Angular uses `*ngFor` directive.

[https://angular.io/api/common/NgForOf](https://angular.io/api/common/NgForOf)

### Example Code
- [src/app/loop/loop.component.html](../../examples/var-angular/src/app/loop/loop.component.html)
- [src/app/loop/loop.component.ts](../../examples/var-angular/src/app/loop/loop.component.ts)

### List Rendering

## React

> React uses `Array.map()` method.

[https://reactjs.org/docs/lists-and-keys.html](https://reactjs.org/docs/lists-and-keys.html)

### Example Code
- [src/components/Loop.js](../../examples/var-react/src/components/Loop.js)

### List Rendering
