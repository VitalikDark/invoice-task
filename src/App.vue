<template>
  <div id="app">
    <InvoiceCalc />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InvoiceCalc from './components/InvoiceCalc.vue';

export default Vue.extend({
  name: 'App',
  components: {
    InvoiceCalc
  }
});
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
</style>
