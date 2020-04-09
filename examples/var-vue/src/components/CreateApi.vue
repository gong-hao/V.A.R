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
