<template>
  <li>index: {{index}} | text: {{item.text}}</li>
</template>

<script>
export default {
  name: 'LoopItem',
  props: {
    index: Number,
    item: Object
  }
}
</script>
