# How to Call Remove API in V.A.R

- [How to Call Remove API in V.A.R](#how-to-call-remove-api-in-var)
  - [Vue](#vue)
    - [Example Code](#example-code)
    - [Using `axios`](#using-axios)
  - [Angular](#angular)
    - [Example Code](#example-code-1)
    - [Using `HttpClient`](#using-httpclient)
  - [React](#react)
    - [Example Code](#example-code-2)
    - [Using `axios` in Function Component](#using-axios-in-function-component)
    - [Using `axios` in Class Component](#using-axios-in-class-component)
  - [Scores](#scores)
  - [Differences](#differences)

## Vue

> Use `axios` to call API in the event handler.

[https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

### Example Code
- [src/components/RemoveApi.vue](../../examples/var-vue/src/components/RemoveApi.vue)

### Using `axios`
> 😁

```vue
<template>
  <div>
    <input type="text" ref="id" />
    <button @click="removeSkill()">Remove</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RemoveApi',
  methods: {
    removeSkill() {
      axios
        .delete('http://localhost:4000/skill/' + this.$refs.id.value)
        .then(response => alert(response.data.message))
        .catch(error => console.log(error))
    }
  }
}
</script>
```

## Angular

> Use `HttpClient` to call API in the event handler.

[https://angular.io/guide/http](https://angular.io/guide/http)

[https://angular.io/tutorial/toh-pt6](https://angular.io/tutorial/toh-pt6)

### Example Code
- [src/app/components/remove-api/remove-api.component.html](../../examples/var-angular/src/app/components/remove-api/remove-api.component.html)
- [src/app/components/remove-api/remove-api.component.ts](../../examples/var-angular/src/app/components/remove-api/remove-api.component.ts)

### Using `HttpClient`
> 😁

```html
<input type="text"
       #id />
<button (click)="removeSkill()">Remove</button>
```

```ts
import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-remove-api',
  templateUrl: './remove-api.component.html',
  styleUrls: ['./remove-api.component.scss']
})
export class RemoveApiComponent {
  @ViewChild('id') idRef: ElementRef

  constructor(
    private http: HttpClient
  ) { }

  removeSkill() {
    this.http
      .delete<{ message: string }>('http://localhost:4000/skill/' + this.idRef.nativeElement.value)
      .subscribe(
        data => alert(data.message),
        error => console.log(error)
      )
  }
}
```

## React

> Use `axios` to call API in the event handler.

[https://reactjs.org/docs/faq-ajax.html](https://reactjs.org/docs/faq-ajax.html)

### Example Code
- [src/components/RemoveApiFunction.js](../../examples/var-react/src/components/RemoveApiFunction.js)
- [src/components/RemoveApiClass.js](../../examples/var-react/src/components/RemoveApiClass.js)

### Using `axios` in Function Component
> 😁

```jsx
import React, { useRef } from 'react'

import axios from 'axios'

function RemoveApiFunction() {
  const idRef = useRef()

  function removeSkill() {
    axios
      .delete('http://localhost:4000/skill/' + idRef.current.value)
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <input type="text" ref={idRef} />
      <button onClick={removeSkill}>Remove</button>
    </div>
  )
}

export default RemoveApiFunction
```

### Using `axios` in Class Component
> 😁

```jsx
import React, { createRef } from 'react'

import axios from 'axios'

class RemoveApiClass extends React.Component {
  idRef = createRef()

  removeSkill = () => {
    axios
      .delete('http://localhost:4000/skill/' + this.idRef.current.value)
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.idRef} />
        <button onClick={this.removeSkill}>Remove</button>
      </div>
    )
  }
}

export default RemoveApiClass
```

## Scores
|                     |  Vue  | Angular | React |
| :------------------ | :---: | :-----: | :---: |
| Signal Http Request |  😁   |   😁    |  😁   |

## Differences
- Vue use other AJAX library like `axios`
- Angular use `HttpClient`
- React use other AJAX library like `axios`
