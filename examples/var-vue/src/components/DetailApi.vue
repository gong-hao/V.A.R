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
