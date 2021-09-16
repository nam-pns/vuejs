<template>
  <li>
    <div class="post_title">
      {{blogProps.title}}
    </div>
    <div class="post_body">
      {{blogProps.body}}
    </div>
  </li>
</template>

<script>
export default {
  name: 'BlogItem',
  props: ['blogProps'],
}
</script>

<style scoped>
  
</style>
