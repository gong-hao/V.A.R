<template>
  <div>
    <hero-event :skills="skills" @selection-changes="onSelectionChanges($event)" />
    <ol>
      <li v-for="item in selectedItems" :key="item.id">{{item.name + '\t'}}</li>
    </ol>
  </div>
</template>

<script>
import HeroEvent from './HeroEvent'

export default {
  name: 'HeroEventParent',
  data() {
    return {
      selectedItems: [],
      skills: [
        { id: 1, name: 'Runic Blade' },
        { id: 2, name: 'Broken Wings' },
        { id: 3, name: 'Ki Burst' },
        { id: 4, name: 'Valor' },
        { id: 5, name: 'Blade of the Exile' },
        { id: 6, name: 'Wind Slash' }
      ]
    }
  },
  methods: {
    onSelectionChanges(selectedItems) {
      this.selectedItems = selectedItems
    }
  },
  components: {
    HeroEvent
  }
}
</script>
