<template>
  <nav class="nav_links">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/counter">Counter</router-link></li>
      <li><router-link to="/todo">Todo</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
