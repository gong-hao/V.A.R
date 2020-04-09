# How to Call Create API in V.A.R

- [How to Call Create API in V.A.R](#how-to-call-create-api-in-var)
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
- [src/components/SignalRequest.vue](../../examples/var-vue/src/components/SignalRequest.vue)

### Using `axios`
> 😁

```vue
<template>
  <div>
    <input type="text" ref="name" />
    <input type="text" ref="key" />
    <button @click="createSkill()">Create</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateApi',
  methods: {
    createSkill() {
      const newSkill = {
        name: this.$refs.name.value,
        key: this.$refs.key.value
      }
      axios
        .post('http://localhost:4000/skill/', newSkill)
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
- [src/app/components/create-api/create-api.component.html](../../examples/var-angular/src/app/components/create-api/create-api.component.html)
- [src/app/components/create-api/create-api.component.ts](../../examples/var-angular/src/app/components/create-api/create-api.component.ts)

### Using `HttpClient`
> 😁

```html
<input type="text"
       #name />
<input type="text"
       #key />
<button (click)="createSkill()">Create</button>
```

```ts
import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-create-api',
  templateUrl: './create-api.component.html',
  styleUrls: ['./create-api.component.scss']
})
export class CreateApiComponent {
  @ViewChild('name') nameRef: ElementRef
  @ViewChild('key') keyRef: ElementRef

  constructor(
    private http: HttpClient
  ) { }

  createSkill() {
    const newSkill = {
      name: this.nameRef.nativeElement.value,
      key: this.keyRef.nativeElement.value
    }
    this.http
      .post<{ message: string }>('http://localhost:4000/skill/', newSkill)
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
- [src/components/CreateApiFunction.js](../../examples/var-react/src/components/CreateApiFunction.js)
- [src/components/CreateApiClass.js](../../examples/var-react/src/components/CreateApiClass.js)

### Using `axios` in Function Component
> 😁

```jsx
import React, { useRef } from 'react'

import axios from 'axios'

function CreateApiFunction() {
  const nameRef = useRef()
  const keyRef = useRef()

  function createSkill() {
    const newSkill = {
      name: nameRef.current.value,
      key: keyRef.current.value
    }
    axios
      .post('http://localhost:4000/skill/', newSkill)
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <input type="text" ref={nameRef} />
      <input type="text" ref={keyRef} />
      <button onClick={createSkill}>Create</button>
    </div>
  )
}

export default CreateApiFunction
```

### Using `axios` in Class Component
> 😁

```jsx
import React, { createRef } from 'react'

import axios from 'axios'

class CreateApiClass extends React.Component {
  nameRef = createRef()
  keyRef = createRef()

  createSkill = () => {
    const newSkill = {
      name: this.nameRef.current.value,
      key: this.keyRef.current.value
    }
    axios
      .post('http://localhost:4000/skill/', newSkill)
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.keyRef} />
        <button onClick={this.createSkill}>Create</button>
      </div>
    )
  }
}

export default CreateApiClass
```

## Scores
|                     |  Vue  | Angular | React |
| :------------------ | :---: | :-----: | :---: |
| Signal Http Request |  😁   |   😁    |  😁   |

## Differences
- Vue use other AJAX library like `axios`
- Angular use `HttpClient`
- React use other AJAX library like `axios`
