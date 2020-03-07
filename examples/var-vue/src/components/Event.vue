<template>
  <div class="container">
    {{val}}
    <input type="text" ref="userInput" />
    <p>With Handler Reference</p>
    <button @click="addVal">Add Value</button>
    <p>With Invoking Handler</p>
    <button @click="addVal()">Add Value</button>
    <p>With a Expression</p>
    <button @click="val += Number($refs.userInput.value) || 0">Add Value</button>
    <p>With Parameters</p>
    <button @click="addWithVal($refs.userInput.value)">Add Value</button>
    <p>With the Event Parameter</p>
    <button @click="hi">Hi</button>
    <button @click="hi($event)">Hi</button>
    <hr />
    <h3>Event Modifiers</h3>
    <p>Stop propagation</p>
    <div class="first" @click="foo">
      first
      <div class="second" @click.stop="foo">
        second
        <div class="third" @click="foo">third</div>
      </div>
    </div>
    <p>Prevent to open the link</p>
    <a @click.prevent="foo" href="https://www.google.com/">Google</a>
    <p>Prevent to submit the form (reload page)</p>
    <form @submit.prevent="foo">
      <input type="text" name="bar" />
      <button type="submit">Submit</button>
    </form>
    <p>Bubbling and capturing</p>
    <ul class="first-ul" @click="foo($event, 'default')" @click.capture="foo($event, 'capture')">
      <li
        class="first-li"
        @click="foo($event, 'default')"
        @click.capture="foo($event, 'capture')"
      >One</li>
      <ul class="second-ul" @click="foo($event, 'default')" @click.capture="foo($event, 'capture')">
        <li
          class="second-li"
          @click="foo($event, 'default')"
          @click.capture="foo($event, 'capture')"
        >Two</li>
        <ul
          class="third-ul"
          @click="foo($event, 'default')"
          @click.capture="foo($event, 'capture')"
        >
          <li
            class="third-li"
            @click="foo($event, 'default')"
            @click.capture="foo($event, 'capture')"
          >Three</li>
        </ul>
      </ul>
    </ul>
    <p>Only the target can trigger the handler</p>
    <div class="first" @click.self="foo">
      first
      <div class="second" @click.self="foo">
        second
        <div class="third" @click.self="foo">third</div>
      </div>
    </div>
    <p>Only works once</p>
    <a @click.prevent.once href="https://www.google.com/">Google</a>
    <button @click.once="foo">Click</button>
    <hr />
    <h3>Key Modifiers</h3>
    <p>With key name</p>
    <input @keyup.enter="hi" />
    <p>With key code</p>
    <input @keyup.13="hi" />
    <p>With system key</p>
    <input @keyup.shift.enter="hi" />
    <p>With exact system key</p>
    <input @keyup.shift.enter.exact="hi" />
    <hr />
    <h3>Mouse Button Modifiers</h3>
    <button @click.right="hi">Right Click</button>
  </div>
</template>

<script>
export default {
  name: 'Event',
  data() {
    return {
      val: 10
    }
  },
  methods: {
    addVal() {
      this.val += Number(this.$refs.userInput.value) || 0
    },
    addWithVal(val) {
      this.val += Number(val) || 0
    },
    hi(event) {
      alert(`${event.type} event`)
    },
    foo(event, memo) {
      console.log(event.currentTarget, memo)
    }
  }
}
</script>
