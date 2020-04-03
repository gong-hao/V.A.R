# How to Create Components in V.A.R

> Components are building blocks that construct your dream castle.

## Vue

[https://vuejs.org/v2/guide/components.html](https://vuejs.org/v2/guide/components.html)

### Example Code
- [src/components/Hi.vue](../../examples/var-vue/src/components/Hi.vue)

### Using Vue Instance 😁

```html
<div id="app"></div>

<script src='https://unpkg.com/vue'></script>
<script>
  const Hi = {
    template: '<h1>hi</h1>'
  }

  const app = new Vue({
    el: '#app',
    template: '<hi />',
    components: {
      Hi
    }
  })
</script>
```

### Using Single File Components 😁

[https://vuejs.org/v2/guide/single-file-components.html](https://vuejs.org/v2/guide/single-file-components.html)

`src/components/Hi.vue`
```vue
<template>
  <h1>hi</h1>
</template>

<script>
export default {
  name: 'Hi'
}
</script>

<style>
h1 {
  color: red;
}
</style>
```

`src/App.vue`
```vue
<template>
  <div id="app">
    <hi />
  </div>
</template>

<script>
import Hi from './components/Hi.vue'

export default {
  name: 'App',
  components: {
    Hi
  }
}
</script>
```

## Angular

[https://angular.io/guide/architecture-components](https://angular.io/guide/architecture-components)

### Example Code
- [src/app/components/hi/hi.component.html](../../examples/var-angular/src/app/components/hi/hi.component.html)
- [src/app/components/hi/hi.component.ts](../../examples/var-angular/src/app/components/hi/hi.component.ts)

### Using Components With `templateUrl` 😁

`src/app/components/hi/hi.component.html`
```html
<h1>hi</h1>
```

`src/app/components/hi/hi.component.scss`
```scss
h1 {
  color: red;
}
```

`src/app/components/hi/hi.component.ts`
```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent { }
```

`src/app/app.component.html`
```html
<app-hi></app-hi>
```

### Using Components With `template` 😁

`src/app/components/hi/hi.component.ts`
```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-hi',
  template: '<h1>hi</h1>',
  styleUrls: ['./hi.component.scss']
})
export class HiComponent { }
```

### Declarations In AppModule 😁

`src/app/app.module.ts`
```ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HiComponent } from './components/hi/hi.component'

@NgModule({
  declarations: [
    HiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## React

[https://reactjs.org/docs/react-component.html](https://reactjs.org/docs/react-component.html)

### Example Code
- [src/components/Hi.js](../../examples/var-react/src/components/Hi.js)

### Using Function components 😁

`src/components/Hi.js`
```js
import React from 'react'

function Hi() {
  return <h1>hi</h1>
}

export default Hi
```

`src/App.js`
```js
import Hi from './components/Hi'
import React from 'react'

function App() {
  return (
    <Hi />
  )
}

export default App
```

### Using Class Components 😁

`src/components/Hi.js`
```js
import React from 'react'

class Hi extends React.Component {
  render() {
    return <h1>hi</h1>
  }
}

export default Hi
```

`src/App.js`
```js
import Hi from './components/Hi'
import React from 'react'

class App extends React.Component {
  render() {
    return <Hi />
  }
}

export default App
```

## Scores
|            |  Vue  | Angular | React |
| :--------- | :---: | :-----: | :---: |
| Components |  😁   |   😁    |  😁   |

## Differences

- Vue
  - Vue Instance
    - Using `template` attribute
    - `template literals`
  - Single File Component
    - Using `<template>` block
    - `html`
- Angular
  - With `template`
    - Using `template` attribute in the same file
    - `template literals`
  - With `templateUrl`
    - Using `templateUrl` for the template path in a separated file
    - `html`
- React
  - Function Component
    - Using `function`
    - `jsx`
  - Class Component
    - Using `class` that extends `React.Component`
    - `jsx`

## Conclusions
- Everyone does a good job here.
