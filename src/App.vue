<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="container">
    <div class="header__bar">
      <div class="logo"></div>
      <div class="nav"></div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header__bar {
  background: #ffffff;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 32px;
  height: 55px;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
}

.header__bar .logo {
  background-color: aquamarine;
  height: 100%;
  width: 50px;
}

.header__bar .nav {
  background-color: bisque;
  height: 100%;
  width: 100%;
  /* width: 100px; */
}

.content {
  background-color: bisque;
  width: 100%;
  margin-top: 55px;
  /* height: calc(100-2.5rem); */
}
</style>
