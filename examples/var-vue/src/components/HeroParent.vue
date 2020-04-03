<template>
  <hero-props
    :name="name"
    :title="title"
    :health="health"
    :attackDamage="attackDamage"
    :skills="skills"
  />
</template>

<script>
import HeroProps from './HeroProps'

export default {
  name: 'HeroParent',
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
  components: {
    HeroProps
  }
}
</script>
