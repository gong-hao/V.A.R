<template>
  <div>
    <ul>
      <li @click="toggleSelectAll()">
        <span v-if="isSelectedAll">☑</span>
        <span v-if="!isSelectedAll">☐</span>
        <strong>Select All</strong>
      </li>
      <li v-for="item in selectableItems" :key="item.id" @click="toggleSelectItem(item)">
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
    items: Array
  },
  data() {
    return {
      isSelectedAll: false
    }
  },
  computed: {
    selectableItems() {
      return this.items.map(x => ({ ...x, isSelected: false }))
    }
  },
  methods: {
    onSelectionsChanged() {
      const selectedItems = this.selectableItems.filter(x => x.isSelected)
      this.$emit('selection-changes', selectedItems)
    },
    toggleSelectAll() {
      this.isSelectedAll = !this.isSelectedAll
      for (const item of this.selectableItems) {
        item.isSelected = this.isSelectedAll
      }
      this.onSelectionsChanged()
    },
    toggleSelectItem(item) {
      item.isSelected = !item.isSelected
      this.isSelectedAll = this.selectableItems.every(x => x.isSelected)
      this.onSelectionsChanged()
    }
  }
}
</script>
