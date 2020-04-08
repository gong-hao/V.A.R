<template>
  <div id="app">
    <hero-props-parent />
  </div>
</template>

<script>
import HeroPropsParent from './components/HeroPropsParent'

export default {
  name: 'App',
  components: {
    HeroPropsParent
  }
}
</script>
