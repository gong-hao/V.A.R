# How to Call Detail API in V.A.R

## Vue

> Use `axios` to call API in the `mounted` lifecycle hook.

[https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

### Example Code
- [src/components/DetailApi.vue](../../examples/var-vue/src/components/DetailApi.vue)

### Using `axios` 😁

```vue
<template>
  <div v-if="skill">
    {{skill.id}} -
    {{skill.name}}
    <span v-if="skill.key">[{{skill.key}}]</span>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DetailApi',
  data() {
    return {
      skill: null
    }
  },
  methods: {
    detailSkill(id) {
      axios
        .get('http://localhost:3000/skill/' + id)
        .then(response => (this.skill = response.data))
        .catch(error => console.log(error))
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id') || 1
    this.detailSkill(id)
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
- [src/app/components/detail-api/detail-api.component.html](../../examples/var-angular/src/app/components/detail-api/detail-api.component.html)
- [src/app/components/detail-api/detail-api.component.ts](../../examples/var-angular/src/app/components/detail-api/detail-api.component.ts)

### Using `HttpClient` 😁


## React

> Use `axios` to call API in the `componentDidMount` lifecycle hook (Class Class Component).

> Use `axios` to call API in the `useEffect` hook (Function Component).

[https://reactjs.org/docs/faq-ajax.html](https://reactjs.org/docs/faq-ajax.html)

### Example Code
- [src/components/DetailApi.js](../../examples/var-react/src/components/DetailApi.js)

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
