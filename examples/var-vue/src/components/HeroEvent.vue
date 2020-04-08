<template>
  <div>
    <ul>
      <li>
        <span v-if="isSelectAll" :click="toggleSelectAll()">☑</span>
        <span v-if="!isSelectAll" :click="toggleSelectAll()">☐</span>
      </li>
      <li v-for="skill in skills" :key="skill.id">
        <span v-if="skill[checkedSymbol]" :click="toggleSelectItem(skill)">☑</span>
        <span v-if="!skill[checkedSymbol]" :click="toggleSelectItem(skill)">☐</span>
        {{skill.name}}
      </li>
    </ul>
  </div>
</template>

<script>
const checkedSymbol = new Symbol('CheckedSymbol')

export default {
  name: 'HeroEvent',
  props: {
    skills: Array
  },
  data() {
    return {
      checkedSymbol,
      isSelectAll: false
    }
  },
  methods: {
    onSelectionsChanged() {
      const selectedItems = this.skill.filter(x => x[checkedSymbol])
      $emit('selection-changes', selectedItems)
    },
    toggleSelectAll() {
      this.isSelectAll = !this.isSelectAll
      for (const skill of this.skills) {
        item[checkedSymbol] = this.isSelectAll
      }
      this.onSelectionsChanged()
    },
    toggleSelectItem(item) {
      item[checkedSymbol] = !item[checkedSymbol]
      this.isSelectAll = this.skills.every(x => x[checkedSymbol])
      this.onSelectionsChanged()
    }
  }
}
</script>
