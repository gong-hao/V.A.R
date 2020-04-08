<template>
  <div>
    {{isChecked ? '☑' : '☐'}}
    <hero-check @check-changes="onCheckChanges($event)" />
  </div>
</template>

<script>
import HeroCheck from './HeroCheck'

export default {
  name: 'HeroCheckParent',
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    onCheckChanges(isChecked) {
      this.isChecked = isChecked
    }
  },
  components: {
    HeroCheck
  }
}
</script>
