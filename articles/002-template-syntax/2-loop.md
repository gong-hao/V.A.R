# How to Loop Arrays in V.A.R

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
  methods: {
    getItems(take) {
      return [
        { id: 4, text: 'foo' },
        { id: 5, text: 'bar' },
        { id: 6, text: 'woo' }
      ].slice(0, take)
    }
  },
  computed: {
    getComputedItems() {
      return [
        { id: 4, text: 'foo' },
        { id: 5, text: 'bar' },
        { id: 6, text: 'woo' }
      ]
    }
  },
  components: {
    LoopItem
  }
}
</script>
```

### Array Rendering 😁
```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{item.text}}</li>
  </ul>
</template>
```

### Object Rendering 😎
```vue
<template>
  <ul>
    <li v-for="(item, name, index) in person" :key="name">
      index: {{index}} | name: {{name}} | value: {{item}}
    </li>
  </ul>
</template>
```

> The order of keys is based on the enumeration order of `Object.keys()`

### Times Rendering 😎
```vue
<template>
  <ul>
    <li v-for="x in 3" :key="x">{{x}}</li>
  </ul>
</template>
```

### Characters Rendering 😎
```vue
<template>
  <ul>
    <li v-for="(c, index) in 'Good'" :key="index">{{c}}</li>
  </ul>
</template>
```

### Alias 🙂
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

### Without Showing a Root Element 🙁
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

> It's required to set `:key` on every element inside the `<template>`, which is inconvenient.

### With a Component 😁
```vue
<template>
  <ul>
    <LoopItem v-for="(item, index) in items" :key="item.id" :item="item" :index="index" />
  </ul>
</template>
```

### With a Method 😁
```vue
<template>
  <ul>
    <li v-for="item in getItems(3)" :key="item.id">{{item.id}}</li>
  </ul>
</template>
```

### With a Computed Property 😎
```vue
<template>
  <ul>
    <li v-for="item in getComputedItems" :key="item.id">
      {{item.id}}
    </li>
  </ul>
</template>
```

> [The difference between COMPUTED and METHODS in Vue.js](https://medium.com/notonlycss/the-difference-between-computed-and-methods-in-vue-js-9cb05c59ed98#eb66)

### Caveats

- It's not recommended to use `v-if` and `v-for` together ([v-for with v-if](https://vuejs.org/v2/guide/list.html#v-for-with-v-if)).
- `v-for` has a higher priority than `v-if`.

## Angular

> Angular uses `*ngFor` directive.

[https://angular.io/api/common/NgForOf](https://angular.io/api/common/NgForOf)

### Example Code
- [src/app/components/loop/loop.component.html](../../examples/var-angular/src/app/components/loop/loop.component.html)
- [src/app/components/loop/loop.component.ts](../../examples/var-angular/src/app/components/loop/loop.component.ts)

> `trackBy` is optional in `*ngFor`, but it will increase the performance.

### Script Part
```ts
import { KeyValue } from '@angular/common'
import { Component, OnInit } from '@angular/core'

import { LoopItem } from '../../models/loop-item'

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent implements OnInit {
  arrayRef = Array
  items = [
    { id: 1, text: 'foo' },
    { id: 2, text: 'bar' },
    { id: 3, text: 'woo' }
  ]
  person = {
    name: 'Gordon',
    age: 18,
    power: 999,
    isSuper: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, item: LoopItem) {
    return item.id
  }

  trackByKey(index: number, item: KeyValue<string, any>) {
    return item.key
  }

  getItems(take: number) {
    return [
      { id: 4, text: 'foo' },
      { id: 5, text: 'bar' },
      { id: 6, text: 'woo' }
    ].slice(0, take)
  }
}
```

### Array Rendering 😁
```html
<ul>
  <li *ngFor="let item of items; index as i; trackBy: trackById;">
    index: {{i}} | text: {{item.text}}
  </li>
</ul>
```

### Object Rendering 🙄
```html
<ul>
  <li *ngFor="let item of person | keyvalue; index as i; trackBy: trackByKey;">
    index: {{i}} | name: {{item.key}} | value: {{item.value}}
  </li>
</ul>
```

> [KeyValuePipe](https://angular.io/api/common/KeyValuePipe)

### Times Rendering 🙄
```ts
...
export class LoopComponent {
  arrayRef = Array
  ...
}
```

```html
<ul>
  <li *ngFor="let x of arrayRef.from(arrayRef(3).keys())">{{x + 1}}</li>
</ul>
```

### Characters Rendering 🙄
```html
<ul>
  <li *ngFor="let c of 'Good'.split('')">{{c}}</li>
</ul>
```

### Alias 😁
```html
<ul>
  <li *ngFor="let item of items;
              index as i;
              count as c;
              first as isFirst;
              last as isLast;
              even as isEven;
              odd as isOdd;">
    index: {{i}} |
    count: {{c}} |
    first: {{isFirst}} |
    last: {{isLast}} |
    even: {{isEven}} |
    odd: {{isOdd}}
  </li>
</ul>
```

> `index as i` and `let i = index` are interchangeable.
>
> [https://angular.io/api/common/NgForOfContext#properties](https://angular.io/api/common/NgForOfContext#properties).

### Without Showing a Root Element 😁
```html
<ul>
  <ng-container *ngFor="let item of items; index as i; trackBy: trackById;">
    <li>index: {{i}}</li>
    <li>text: {{item.text}}</li>
  </ng-container>
</ul>
```

### With a Component 😁
```html
<ul>
  <app-loop-item *ngFor="let item of items; index as i; trackBy: trackById;"
                 [item]="item"
                 [index]="i"></app-loop-item>
</ul>
```

### With a Component & Without Showing a Root Element 🙁

> Borrow selector from [Attribute directives](https://angular.io/guide/attribute-directives)

```ts
@Component({
  selector: '[appLoopItemAttr]', // <--
  templateUrl: './loop-item-attr.component.html',
  styleUrls: ['./loop-item-attr.component.scss']
})
export class LoopItemAttrComponent {
  ...
}
```
```html
<ul>
  <li appLoopItemAttr
      *ngFor="let item of items; index as i; trackBy: trackById;"
      [item]="item"
      [index]="i"></li>
</ul>
```

> Using attribute is not intuitive because it's hard to tell it's `directive` or `component`.

### Use Pipe to Get Rid of `trackByFn` 🙄

> In most cases, `id` or `uuid` is the key that needs to be tracked. However, `trackBy: item?.id` is deprecated. 😢 Ben Nadel has a good idea: [Using Pure Pipes To Generate NgFor TrackBy Identity Functions In Angular 7.2.7](https://www.bennadel.com/blog/3579-using-pure-pipes-to-generate-ngfor-trackby-identity-functions-in-angular-7-2-7.htm)

```html
<ul>
  <li *ngFor="let item of items; index as i; trackBy: 'id' | trackByProperty">
    index: {{i}} | text: {{item.text}}
  </li>
</ul>
```

### With a Method 😁
```html
<ul>
  <li *ngFor="let item of getItems(3)">{{item.id}}</li>
</ul>
```

### Caveats

- It's not allowed to use `*ngIf` and `*ngFor*` together.
- If you have to use `*ngIf` and `*ngFor*` together, use `<ng-container>`.

## React

> React uses `Array.map()` method.

[https://reactjs.org/docs/lists-and-keys.html](https://reactjs.org/docs/lists-and-keys.html)

### Example Code
- [src/components/Loop.js](../../examples/var-react/src/components/Loop.js)

### Script Part
```js
import React from 'react'

function Loop() {
  const items = [
    { id: 1, text: 'foo' },
    { id: 2, text: 'bar' },
    { id: 3, text: 'woo' }
  ]
  const person = {
    name: 'Gordon',
    age: 18,
    power: 999,
    isSuper: true
  }
  const getItems = take => {
    return [
      { id: 4, text: 'foo' },
      { id: 5, text: 'bar' },
      { id: 6, text: 'woo' }
    ].slice(0, take)
  }
  ...
}
```

### Array Rendering 😁
```jsx
<ul>
  {items.map((item, index) => {
    return (
      <li key={item.id}>
        index: {index} | text: {item.text}
      </li>
    )
  })}
</ul>
```

### Object Rendering 🙄
```jsx
<ul>
  {Object.keys(person).map((key, index) => (
    <li key={key}>
      index: {index} | name: {key} | value: {person[key]}
    </li>
  ))}
</ul>
```

```jsx
<ul>
  {Object.entries(person).map(([key, value]) => (
    <li key={key}>
      name: {key} | value: {value}
    </li>
  ))}
</ul>
```

### Times Rendering 🙄
```jsx
<ul>
  {Array.from(Array(3).keys()).map(x => {
    return <li key={x}>{x + 1}</li>
  })}
</ul>
```

### Characters Rendering 🙄
```jsx
<ul>
  {'Good'.split('').map((c, index) => {
    return <li key={index}>{c}</li>
  })}
</ul>
```

### Alias 🙄
```jsx
<ul>
  {items.map((item, index) => {
    const isFirst = index === 0
    const isLast = index === items.length - 1
    const isEven = index % 2 === 0
    const isOdd = index % 2 === 1
    return (
      <li key={item.id}>
        index: {index} |
        count: {items.length} |
        first: {isFirst.toString()} |
        last: {isLast.toString()} |
        even: {isEven.toString()} |
        odd: {isOdd.toString()}
      </li>
    )
  })}
</ul>
```

### Without Showing a Root Element 😁
```jsx
<ul>
  {items.map((item, index) => {
    return (
      <React.Fragment key={item.id}>
        <li>index: {index}</li>
        <li>text: {item.text}</li>
      </React.Fragment>
    )
  })}
</ul>
```

### With a Component 😁
```jsx
<ul>
  {items.map((item, index) => {
    return <LoopItem index={index} item={item} key={item.id} />
  })}
</ul>
```

### With a Method 😁
```jsx
<ul>
  {getItems(3).map((item, index) => {
    return <li key={item.id}>{item.id}</li>
  })}
</ul>
```

## Scores
|                                |  Vue  | Angular | React |
| :----------------------------- | :---: | :-----: | :---: |
| Array Rendering                |  😁   |   😁    |  😁   |
| Object Rendering               |  😎   |   🙄    |  🙄   |
| Times Rendering                |  😎   |   🙄    |  🙄   |
| Characters Rendering           |  😎   |   🙄    |  🙄   |
| Alias                          |  🙂   |   😁    |  🙄   |
| Without Showing a Root Element |  🙁   |   🙁    |  😁   |
| With a Component               |  😁   |   😁    |  😁   |
| With a Method                  |  😁   |   😁    |  😁   |
| With a Computed Property       |  😎   |   N/A   |  N/A  |

## Differences
|             |           Vue           |                     Angular                      |           React            |
| :---------- | :---------------------: | :----------------------------------------------: | :------------------------: |
| power by    |        directive        |                    directive                     |            JSX             |
| loop syntax | `v-for="item in items"` |           `*ngFor="let item of items"`           | `{items.map(item => ...)}` |
| key syntax  |    `:key="item.id"`     |               `trackBy: trackByFn`               |      `key={item.id}`       |
| key         |        required         |            optional, but good to have            |          required          |
| alias       |     `index`, `name`     | `index`, `count`, `first`, `last`, `even`, `odd` |            N/A             |
