# How to Call List API in V.A.R

- [How to Call List API in V.A.R](#how-to-call-list-api-in-var)
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
- [src/components/ListApi.vue](../../examples/var-vue/src/components/ListApi.vue)

### Using `axios`
> 😁

```vue
<template>
  <ul>
    <li v-for="skill in skills" :key="skill.id">
      {{skill.name}}
      <span v-if="skill.key">[{{skill.key}}]</span>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ListApi',
  data() {
    return {
      skills: []
    }
  },
  methods: {
    listSkills() {
      axios
        .get('http://localhost:4000/skill')
        .then(response => (this.skills = response.data))
        .catch(error => console.log(error))
    }
  },
  mounted() {
    this.listSkills()
  }
}
</script>
```

## Angular

> Use `HttpClient` to call API in the `ngOnInit` lifecycle hook.

[https://angular.io/guide/http](https://angular.io/guide/http)

[https://angular.io/tutorial/toh-pt6](https://angular.io/tutorial/toh-pt6)

### Example Code
- [src/app/components/list-api/list-api.component.html](../../examples/var-angular/src/app/components/list-api/list-api.component.html)
- [src/app/components/list-api/list-api.component.ts](../../examples/var-angular/src/app/components/list-api/list-api.component.ts)

### Using `HttpClient`
> 😁

```html
<ul>
  <li *ngFor="let skill of skills">
    {{skill.name}}
    <span *ngIf="skill.key">[{{skill.key}}]</span>
  </li>
</ul>
```

```ts
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.scss']
})
export class ListApiComponent implements OnInit {
  skills = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.listSkills()
  }

  listSkills() {
    this.http
      .get<any[]>('http://localhost:4000/skill')
      .subscribe(
        data => this.skills = data,
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
- [src/components/ListApiFunction.js](../../examples/var-react/src/components/ListApiFunction.js)
- [src/components/ListApiClass.js](../../examples/var-react/src/components/ListApiClass.js)

### Using `axios` in Function Component
> 😁

```jsx
import React, { useEffect, useState } from 'react'

import axios from 'axios'

function ListApiFunction() {
  const [skills, setSkills] = useState([])

  useEffect(() => listSkills())

  function listSkills() {
    axios
      .get('http://localhost:4000/skill')
      .then(response => setSkills(response.data))
      .catch(error => console.log(error))
  }

  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.id}>
          {skill.name}
          {skill.key ? <span>[{skill.key}]</span> : null}
        </li>
      ))}
    </ul>
  )
}

export default ListApiFunction
```

### Using `axios` in Class Component
> 😁

```jsx
import React from 'react'
import axios from 'axios'

class ListApiClass extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    this.listSkills()
  }

  listSkills = () => {
    axios
      .get('http://localhost:4000/skill')
      .then(response => this.setState({ skills: response.data }))
      .catch(error => console.log(error))
  }

  render() {
    return (
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
    )
  }
}

export default ListApiClass
```

## Scores
|                     |  Vue  | Angular | React |
| :------------------ | :---: | :-----: | :---: |
| Signal Http Request |  😁   |   😁    |  😁   |

## Differences
- Vue use other AJAX library like `axios`
- Angular use `HttpClient`
- React use other AJAX library like `axios`
