<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">index: {{index}} | text: {{item.text}}</li>
    </ul>
    <hr />
    <ul>
      <li
        v-for="(item, name, index) in person"
        :key="name"
      >index: {{index}} | name: {{name}} | value: {{person[name]}}</li>
    </ul>
    <hr />
    <ul>
      <template v-for="(item, index) in items">
        <li :key="`index-${item.id}`">index: {{index}}</li>
        <li :key="`text-${item.id}`">text: {{item.text}}</li>
      </template>
    </ul>
    <hr />
    <ul>
      <LoopItem v-for="(item, index) in items" :key="item.id" :item="item" :index="index" />
    </ul>
    <hr />
    <ul>
      <li v-for="x in 3" :key="x">{{x}}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="(c, index) in 'Good'" :key="index">{{c}}</li>
    </ul>
  </div>
</template>

<script>
import LoopItem from './LoopItem.vue'
export default {
  name: 'Loop',
  data() {
    return {
      items: [
        { id: 1, text: 'foo' },
        { id: 2, text: 'bar' },
        { id: 3, text: 'woo' }
      ],
      person: {
        name: 'Gordon',
        age: 18,
        power: 999,
        isSuper: true
      }
    }
  },
  components: {
    LoopItem
  }
}
</script>
