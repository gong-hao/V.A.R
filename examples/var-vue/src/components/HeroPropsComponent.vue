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
  name: 'HeroPropsComponent',
  // props: ['name', 'title', 'health', 'attackDamage', 'skills'],
  // props: {
  //   name: String,
  //   title: String,
  //   health: Number,
  //   attackDamage: Number,
  //   skills: Array
  // },
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
      default: 0
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
