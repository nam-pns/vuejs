<template>
  <button @click="$emit('onCount')"><slot /></button>
</template>

<script>
export default {
  name: 'ButtonCount',
}
</script>
