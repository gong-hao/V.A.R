<template>
  <div>
    <h3>Array Rendering</h3>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">index: {{index}} | text: {{item.text}}</li>
    </ul>
    <hr />
    <h3>Object Rendering</h3>
    <ul>
      <li
        v-for="(item, name, index) in person"
        :key="name"
      >index: {{index}} | name: {{name}} | value: {{person[name]}}</li>
    </ul>
    <hr />
    <h3>Times Rendering</h3>
    <ul>
      <li v-for="x in 3" :key="x">{{x}}</li>
    </ul>
    <hr />
    <h3>Characters Rendering</h3>
    <ul>
      <li v-for="(c, index) in 'Good'" :key="index">{{c}}</li>
    </ul>
    <hr />
    <h3>Alias</h3>
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
    <h3>Without Showing a Root Element</h3>
    <ul>
      <template v-for="(item, index) in items">
        <li :key="`index-${item.id}`">index: {{index}}</li>
        <li :key="`text-${item.id}`">text: {{item.text}}</li>
      </template>
    </ul>
    <hr />
    <h3>With a Component</h3>
    <ul>
      <LoopItem v-for="(item, index) in items" :key="item.id" :item="item" :index="index" />
    </ul>
    <hr />
    <h3>With a Method</h3>
    <ul>
      <li v-for="item in getItems(10)" :key="item.id">{{item.id}}</li>
    </ul>
    <hr />
    <h3>With a Computed Property</h3>
    <ul>
      <li v-for="item in getComputedItems" :key="item.id">{{item.id}}</li>
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
  methods: {
    getItems(take) {
      return [
        { id: 4, text: 'foo' },
        { id: 5, text: 'bar' },
        { id: 6, text: 'woo' }
      ].slice(0, take)
    }
  },
  computed: {
    getComputedItems() {
      return [
        { id: 4, text: 'foo' },
        { id: 5, text: 'bar' },
        { id: 6, text: 'woo' }
      ]
    }
  },
  components: {
    LoopItem
  }
}
</script>
