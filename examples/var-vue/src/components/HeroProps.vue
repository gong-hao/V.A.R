<template>
  <div>
    <h1>{{description}}</h1>
    <h3>Health: {{health}}</h3>
    <h3>Attack Damage: {{attackDamage}}</h3>
    <ul>
      <li v-for="skill in skills" :key="skill.id">
        {{skill.name}}
        <span v-if="skill.key">[{{skill.key}}]</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroProps',
  props: {
    name: {
      type: String,
      default: 'Hero Name'
    },
    title: {
      type: String,
      default: 'Hero Title'
    },
    health: {
      type: Number,
      default: 0,
      validator(value) {
        return value > 0 && value < 99999
      }
    },
    attackDamage: {
      type: Number,
      default: 0
    },
    skills: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    description() {
      if (this.name && this.title) {
        return this.name.toUpperCase() + ' - ' + this.title.toUpperCase()
      }
      return null
    }
  }
}
</script>
