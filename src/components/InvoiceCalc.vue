<template>
  <main>
    <HeaderCalc />
    <TableCalc />
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import TableCalc from '@/components/TableCalc.vue'
import HeaderCalc from '@/components/HeaderCalc.vue'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    TableCalc,
    HeaderCalc,
  }
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
