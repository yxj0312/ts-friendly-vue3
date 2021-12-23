<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'

import { reactive, ref } from 'vue'

const count = ref(0)

const appInfo = reactive({
  name: 'Counter',
  slogan: 'an app you can count on'
})
</script>

<template>
  <div>
    <h1>{{ appInfo.name }}</h1>
    <h2>{{ appInfo.slogan }}</h2>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
