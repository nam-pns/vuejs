<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>My Router</h1>
  <Navbar />
  <router-view />
</template>

<script>

  import Navbar from './components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav_links ul {
  padding: 0;
}

.nav_links ul li {
  display: inline-block;
  font-size: 20px;
  margin: 20px;
}

.nav_links ul li a {
  color: green;
  text-decoration: none;
  transition: 0.3s;
}

.nav_links ul li a:hover {
  color: blue;
}
</style>
