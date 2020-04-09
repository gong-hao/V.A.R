# How to Call List API in V.A.R

## Vue

> Use `axios` to call API in the `mounted` lifecycle hook.

[https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

### Example Code
- [src/components/ListApi.vue](../../examples/var-vue/src/components/ListApi.vue)

### Using `axios` 😁

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
        .get('http://localhost:3000/skill')
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

> Use `HttpClient` to call API in a service, then inject the service into the component.
>
> Use the service to call API in the `ngOnInit` lifecycle hook.

[https://angular.io/guide/http](https://angular.io/guide/http)

[https://angular.io/tutorial/toh-pt6](https://angular.io/tutorial/toh-pt6)

### Example Code
- [src/app/components/list-api/list-api.component.html](../../examples/var-angular/src/app/components/list-api/list-api.component.html)
- [src/app/components/list-api/list-api.component.ts](../../examples/var-angular/src/app/components/list-api/list-api.component.ts)

### Using `HttpClient` 😁


## React

> Use `axios` to call API in the `componentDidMount` lifecycle hook (Class Class Component).

> Use `axios` to call API in the `useEffect` hook (Function Component).

[https://reactjs.org/docs/faq-ajax.html](https://reactjs.org/docs/faq-ajax.html)

### Example Code
- [src/components/ListApi.js](../../examples/var-react/src/components/ListApi.js)

### Using `axios` in Function Component 😁

### Using `axios` in Class Component 😁

## Scores
|                     |  Vue  | Angular | React |
| :------------------ | :---: | :-----: | :---: |
| Signal Http Request |  😁   |   😁    |  😁   |

## Differences
- Vue use other AJAX library like `axios`
- Angular use `HttpClient`
- React use other AJAX library like `axios`
