<template>
  <header>
    <h1>
      Vue Invoice Calc
    </h1>
    <div>
      <input
        type="text"
        v-model="product"
        placeholder="type product"
      />
      <input
        type="number"
        v-model="price"
        placeholder="price"
      />
      <input
        type="number"
        v-model="qty"
        placeholder="Qty"
      />
      <button
        @click="handleAddInvoceItem"
      >
        Add
      </button>
    </div>
  </header>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
   name: "HeaderCalc",

    data() {
     return {
       qty: '',
       price: '',
       product: '',
     }
    },

    methods: {
      handleAddInvoceItem() {
        if(this.qty.length && this.price.length && this.product.length) {
          this.$store.commit('addNewInvoices', {
            qty: this.qty,
            price: Number(this.price),
            product: this.product
          });
        }
        this.qty = ''
        this.price = ''
        this.product = ''
      }
    }
  }
</script>