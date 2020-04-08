<template>
  <div>
    <ul>
      <li @click="toggleSelectAll()">
        <span v-if="isSelectedAll">☑</span>
        <span v-if="!isSelectedAll">☐</span>
        <strong>Select All</strong>
      </li>
      <li v-for="item in items" :key="item.id" @click="toggleSelectItem(item)">
        <span v-if="item.isSelected">☑</span>
        <span v-if="!item.isSelected">☐</span>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeroEvent',
  props: {
    skills: Array
  },
  data() {
    return {
      isSelectedAll: false
    }
  },
  computed: {
    items() {
      return this.skills.map(x => ({ ...x, isSelected: false }))
    }
  },
  methods: {
    onSelectionsChanged() {
      const selectedItems = this.items.filter(x => x.isSelected)
      this.$emit('selection-changes', selectedItems)
    },
    toggleSelectAll() {
      this.isSelectedAll = !this.isSelectedAll
      for (const item of this.items) {
        item.isSelected = this.isSelectedAll
      }
      this.onSelectionsChanged()
    },
    toggleSelectItem(item) {
      item.isSelected = !item.isSelected
      this.isSelectedAll = this.items.every(x => x.isSelected)
      this.onSelectionsChanged()
    }
  }
}
</script>
