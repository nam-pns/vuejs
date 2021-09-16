<template>
<div id="counter">
  <div>Counter: {{ counterNumb }}</div>
  <ButtonCount @onCount="HandleIncrement">Handle Increment</ButtonCount>
  <ButtonCount @onCount="HandleDecrement">Handle Decrement</ButtonCount>
</div>
</template>

<script>
import ButtonCount from '../components/ButtonCount.vue'

export default {
  name: 'Counter',
  components: {
    ButtonCount
  },
  data() {
    return {
      counterNumb: 0,
    }
  },
  methods: {
    HandleIncrement() {
      this.counterNumb += 1;
    },
    HandleDecrement() {

      if (this.counterNumb > 0) {
        this.counterNumb -= 1;
      }

    }
  }

}
</script>
