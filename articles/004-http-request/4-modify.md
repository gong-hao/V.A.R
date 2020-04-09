# How to Call Modify API in V.A.R

## Vue

> Use `axios` to call API in the `mounted` lifecycle hook.

[https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

### Example Code
- [src/components/ModifyApi.vue](../../examples/var-vue/src/components/ModifyApi.vue)

### Using `axios` 😁

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
          'http://localhost:3000/skill/' + this.$refs.id.value,
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

### Using `HttpClient` 😁


## React

> Use `axios` to call API in the `componentDidMount` lifecycle hook (Class Class Component).

> Use `axios` to call API in the `useEffect` hook (Function Component).

[https://reactjs.org/docs/faq-ajax.html](https://reactjs.org/docs/faq-ajax.html)

### Example Code
- [src/components/ModifyApi.js](../../examples/var-react/src/components/ModifyApi.js)

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
