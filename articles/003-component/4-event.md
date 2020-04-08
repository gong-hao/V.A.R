# How to Use Event Handler in V.A.R

> Event Handlers are the hooks from the children. Children will cry, shout, or throw away the pacifiers to get attention from the parent. Those cute babies won't care how the parent handles it, but the parent must do something.

## Vue

> Vue uses `this.$emit('event-name', eventArgs)` to notify the parent component.
>
> The parent uses `<component-name @event-name="methodName($event)" />` to listen to the event from child components.

> `@event-name="methodName($event)"` is the shorthand of `v-on:event-name="methodName($event)"`

[https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event](https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event)

[https://vuejs.org/v2/guide/components-custom-events.html](https://vuejs.org/v2/guide/components-custom-events.html)

### Example Code
- [src/components/HeroEvent.vue](../../examples/var-vue/src/components/HeroEvent.vue)
- [src/components/HeroEventParent.vue](../../examples/var-vue/src/components/HeroEventParent.vue)
- [src/components/HeroCheck.vue](../../examples/var-vue/src/components/HeroCheck.vue)
- [src/components/HeroCheckParent.vue](../../examples/var-vue/src/components/HeroCheckParent.vue)

`Child Component`
```vue
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
```

`Parent Component`
```vue
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
```
