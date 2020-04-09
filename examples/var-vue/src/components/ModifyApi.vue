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
