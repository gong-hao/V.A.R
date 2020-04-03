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
  name: 'HeroComponent',
  data() {
    return {
      name: 'Riven',
      title: 'The Exile',
      health: 560,
      attackDamage: 64,
      skills: [
        { id: 1, name: 'Runic Blade', key: null },
        { id: 2, name: 'Broken Wings', key: 'q' },
        { id: 3, name: 'Ki Burst', key: 'w' },
        { id: 4, name: 'Valor', key: 'e' },
        { id: 5, name: 'Blade of the Exile', key: 'r' },
        { id: 6, name: 'Wind Slash', key: 'r' }
      ]
    }
  },
  computed: {
    description() {
      return this.name.toUpperCase() + ' - ' + this.title.toUpperCase()
    }
  }
}
</script>
