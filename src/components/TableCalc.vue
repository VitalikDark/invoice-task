<template>
  <div>
    <table>
      <tr
        v-for="item in getAllInvoices"
        :key="item.product"
      >
        <input
            type="checkbox"
            v-model="item.selected"
            @click="getInvoiceItem(item)"
            @change="handleCheckInvoiceItem(item)"
        />
        <th>{{ item.qty }}</th>
        <th>{{ item.price }}</th>
        <th>{{ item.product }}</th>
      </tr>
    </table>
    <div>
      <button
        @click="hanleDeleteInvoceItem"
      >
        Delete
      </button>
      <h2>
        Total
      </h2>
      <p
          v-if="totalPrice"
      >
        {{totalPrice}}
      </p>
      <p v-else> - </p>
    </div>
    {{removeInvoiceItems}}
    <hr />
    my filted list - {{allListInvoice}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "TableCalc",

    data() {
      return {
        selected: false,
        removeInvoiceItems: [],
      }
    },

    props: {
      list: {
        type: Array,
        default: () => []
      }
    },

    methods: {
      hanleDeleteInvoceItem(value) {
        return console.log(value)
      },

      handleCheckInvoiceItem(item) {
        if(item.selected === true) {
          this.removeInvoiceItems.push(item)
        } else { this.removeInvoiceItems.splice(item, 1) }
      },
    },

    computed: {
      ...mapGetters([
        'getAllInvoices',
      ]),

      allListInvoice() {
        return this.getAllInvoices.filter(v => this.removeInvoiceItems.indexOf(v) == -1)
      },

      totalPrice() {
        return this.getAllInvoices.reduce((accumulator, object) => {
          return accumulator + object.price;
        }, 0);
      }
    }
  }
</script>