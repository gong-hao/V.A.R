<template>
  <div class="container">
    <button @click="toggle()">Toggle!</button>

    <h3>If</h3>
    <div v-if="isShow">You can see me</div>
    <div v-if="!isShow">You can't see me</div>
    <h3>Else</h3>
    <div v-if="isShow">if isShow, you can see me</div>
    <div v-else>otherwise, you can't see me</div>
    <h3>Else If</h3>
    <div v-if="option === 'A'">A</div>
    <div v-else-if="option === 'B'">B</div>
    <div v-else-if="option === 'C'">C</div>
    <div v-else>Other</div>
    <h3>With an Expression</h3>
    <div v-if="val >= 10">You can see me</div>
    <h3>Without Showing a Root Element</h3>
    <p>woo</p>
    <template v-if="isShow">
      <p>foo</p>
      <p>bar</p>
    </template>
    <h3>With a Method</h3>
    <div v-if="showIfEven(2)">You can see 2</div>
    <div v-if="showIfEven(1)">You can't see 1</div>
    <h3>With a Computed Property</h3>
    <div v-if="checkIsShow">You can see 10</div>
    <h3>CSS display</h3>
    <div v-show="isShow">You can see me</div>
  </div>
</template>

<script>
export default {
  name: 'Condition',
  data() {
    return {
      isShow: true,
      option: 'Z',
      val: 10
    }
  },
  methods: {
    showIfEven(num) {
      return num % 2 === 0
    },
    toggle() {
      this.isShow = !this.isShow
      this.option = this.isShow ? 'A' : 'B'
      this.val = Math.floor(Math.random() * 20) + 1
    }
  },
  computed: {
    checkIsShow() {
      return this.val >= 10
    }
  }
}
</script>
