# How to Call Modify API in V.A.R

- [How to Call Modify API in V.A.R](#how-to-call-modify-api-in-var)
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

> Use `axios` to call API in the `mounted` lifecycle hook.

[https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

### Example Code
- [src/components/ModifyApi.vue](../../examples/var-vue/src/components/ModifyApi.vue)

### Using `axios`
> 😁

```vue
<template>
  <div>
    <input type="text" ref="id" />
    <input type="text" ref="name" />
    <input type="text" ref="key" />
    <button @click="modifySkill()">Modify</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ModifyApi',
  methods: {
    modifySkill() {
      const modifiedSkill = {
        name: this.$refs.name.value,
        key: this.$refs.key.value
      }
      axios
        .put(
          'http://localhost:4000/skill/' + this.$refs.id.value,
          modifiedSkill
        )
        .then(response => alert(response.data.message))
        .catch(error => console.log(error))
    }
  }
}
</script>
```

## Angular

> Use `HttpClient` to call API in a service, then inject the service into the component.
>
> Use the service to call API in the `ngOnInit` lifecycle hook.

[https://angular.io/guide/http](https://angular.io/guide/http)

[https://angular.io/tutorial/toh-pt6](https://angular.io/tutorial/toh-pt6)

### Example Code
- [src/app/components/modify-api/modify-api.component.html](../../examples/var-angular/src/app/components/modify-api/modify-api.component.html)
- [src/app/components/modify-api/modify-api.component.ts](../../examples/var-angular/src/app/components/modify-api/modify-api.component.ts)

### Using `HttpClient`
> 😁

```html
<input type="text"
       #id />
<input type="text"
       #name />
<input type="text"
       #key />
<button (click)="modifySkill()">Modify</button>
```

```ts
import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-modify-api',
  templateUrl: './modify-api.component.html',
  styleUrls: ['./modify-api.component.scss']
})
export class ModifyApiComponent {
  @ViewChild('id') idRef: ElementRef
  @ViewChild('name') nameRef: ElementRef
  @ViewChild('key') keyRef: ElementRef

  constructor(
    private http: HttpClient
  ) { }

  modifySkill() {
    const modifiedSkill = {
      name: this.nameRef.nativeElement.value,
      key: this.keyRef.nativeElement.value
    }
    this.http
      .put<{ message: string }>(
        'http://localhost:4000/skill/' + this.idRef.nativeElement.value,
        modifiedSkill
      )
      .subscribe(
        data => alert(data.message),
        error => console.log(error)
      )
  }
}
```

## React

> Use `axios` to call API in the `componentDidMount` lifecycle hook (Class Class Component).

> Use `axios` to call API in the `useEffect` hook (Function Component).

[https://reactjs.org/docs/faq-ajax.html](https://reactjs.org/docs/faq-ajax.html)

### Example Code
- [src/components/ModifyApiFunction.js](../../examples/var-react/src/components/ModifyApiFunction.js)
- [src/components/ModifyApiClass.js](../../examples/var-react/src/components/ModifyApiClass.js)

### Using `axios` in Function Component
> 😁

```jsx
import React, { useRef } from 'react'

import axios from 'axios'

function ModifyApiFunction() {
  const idRef = useRef()
  const nameRef = useRef()
  const keyRef = useRef()

  function modifySkill() {
    const modifiedSkill = {
      name: nameRef.current.value,
      key: keyRef.current.value
    }
    axios
      .put(
        'http://localhost:4000/skill/' + idRef.current.value,
        modifiedSkill
      )
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <input type="text" ref={idRef} />
      <input type="text" ref={nameRef} />
      <input type="text" ref={keyRef} />
      <button onClick={modifySkill}>Modify</button>
    </div>
  )
}

export default ModifyApiFunction
```

### Using `axios` in Class Component
> 😁

```jsx
import React, { createRef } from 'react'

import axios from 'axios'

class ModifyApiClass extends React.Component {
  idRef = createRef()
  nameRef = createRef()
  keyRef = createRef()

  modifySkill = () => {
    const modifiedSkill = {
      name: this.nameRef.current.value,
      key: this.keyRef.current.value
    }
    axios
      .put(
        'http://localhost:4000/skill/' + this.idRef.current.value,
        modifiedSkill
      )
      .then(response => alert(response.data.message))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.idRef} />
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.keyRef} />
        <button onClick={this.modifySkill}>Modify</button>
      </div>
    )
  }
}

export default ModifyApiClass
```

## Scores
|                     |  Vue  | Angular | React |
| :------------------ | :---: | :-----: | :---: |
| Signal Http Request |  😁   |   😁    |  😁   |

## Differences
- Vue use other AJAX library like `axios`
- Angular use `HttpClient`
- React use other AJAX library like `axios`
