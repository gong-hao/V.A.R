<template>
  <div @click="toggleChecked()">
    <span v-if="isChecked">☑</span>
    <span v-if="!isChecked">☐</span>
  </div>
</template>

<script>
export default {
  name: 'HeroCheck',
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    toggleChecked() {
      this.isChecked = !this.isChecked
      this.$emit('check-changes', this.isChecked)
    }
  }
}
</script>
