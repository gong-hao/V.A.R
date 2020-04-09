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
        .delete('http://localhost:3000/skill/' + this.$refs.id.value)
        .then(response => alert(response.data.message))
        .catch(error => console.log(error))
    }
  }
}
</script>
