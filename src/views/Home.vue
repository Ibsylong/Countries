<template>
  <div class="invoices-list">
    <h1 class="invoices-list__title">Invoices</h1>
    <button @click="goToAddPage()">
      Add new invoice
    </button>
    <div
      v-for="invoice in dataContent"
      :key="invoice.id"
      style="padding-bottom:32px;"
      class="invoice-list__item"
    >
      <span class="invoice__id">{{ invoice.id }}</span>
      <span class="invoice__createdAt">{{ invoice.createdAt }}</span>
      <span class="invoice__clientName">{{ invoice.clientName }}</span>
      <span class="invoice__total">{{ invoice.total }}</span>
      <span class="invoice__status">{{ invoice.status }}</span>
      <button @click="deleteInvoice(invoice.id)">Delete</button>
      <button @click="goToEditPage(invoice.id)">
        Edit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dataContent() {
      return this.$store.state.invoices;
    },
  },
  methods: {
    deleteInvoice(id) {
      if (
        confirm(
          "Are you sure you want to delete invoice with the ID " + id + "?"
        )
      ) {
        this.$store.commit("DELETE_INVOICE", id);
      }
    },
    goToEditPage(id) {
      this.$router.push("/edit/" + id);
    },
    goToAddPage() {
      let generatedId = Math.floor(Math.random() * 10000);
      this.$router.push("/add/" + generatedId);
    },
  },
};
</script>
