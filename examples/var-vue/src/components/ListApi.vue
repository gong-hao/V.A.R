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
