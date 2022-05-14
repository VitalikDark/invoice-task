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
    </div>
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
      hanleDeleteInvoceItem(item) {
        console.log(this.selected)
      },

      handleCheckInvoiceItem(item) {
        if (item.selected === true) {
          this.removeInvoiceItems.push(item)
          console.log(this.removeInvoiceItems)
        }
      }
    },

    computed: {
      ...mapGetters([
        'getAllInvoices',
      ]),

      totalPrice() {
        return this.getAllInvoices.reduce((accumulator, object) => {
          return accumulator + object.price;
        }, 0);
      },

      allInvoicesList() {
        return this.getAllInvoices
      }
    }
  }
</script>