<template>
  <div>
    <h1>Edit</h1>
    <div>
      <p>ID</p>
      <input v-model="this.filteredInvoice[0].id" />
    </div>
    <div>
      <p>Description</p>
      <input v-model="this.filteredInvoice[0].description" />
    </div>
    <div>
      <p>Client name</p>
      <input v-model="this.filteredInvoice[0].clientName" />
    </div>
    <div>
      <p>Client email</p>
      <input v-model="this.filteredInvoice[0].clientEmail" />
    </div>
    <div>
      <p>Created at</p>
      <input v-model="this.filteredInvoice[0].createdAt" />
    </div>
    <div>
      <p>Payment due</p>
      <input v-model="this.filteredInvoice[0].paymentDue" />
    </div>
    <div>
      <p>Payment terms</p>
      <input v-model="this.filteredInvoice[0].paymentTerms" />
    </div>
    <div>
      <p>Payment status</p>
      <input v-model="this.filteredInvoice[0].status" />
    </div>
    <div style="margin-top:64px;">
      <h2 style="font-weight:bold;">Client address</h2>
      <p>Street</p>
      <input v-model="this.filteredInvoice[0].clientAddress.street" />
      <p>City</p>
      <input v-model="this.filteredInvoice[0].clientAddress.city" />
      <p>Post code</p>
      <input v-model="this.filteredInvoice[0].clientAddress.postCode" />
      <p>Country</p>
      <input v-model="this.filteredInvoice[0].clientAddress.country" />
    </div>
    <div style="margin-top:64px;">
      <h2 style="font-weight:bold;">Items</h2>
      <div
        v-for="(item, index) in this.filteredInvoice[0].items"
        :key="item.index"
      >
        <p style="text-decoration:underline; font-weight:bold;">
          Item {{ index + 1 }}
        </p>
        <p>Item name</p>
        <input v-model="item.name" />
        <p>Item quantity</p>
        <input v-model="item.quantity" />
        <p>Item price</p>
        <input v-model="item.price" />
        <p>Item total price</p>
        <input v-model="item.total" />
      </div>
    </div>
    <button @click="updateInvoice(this.filteredInvoice[0])">
      Update invoice
    </button>
    <br />
    <div v-if="this.itemUpdateSuccess">Item was successfully added.</div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      invoiceId: this.$route.params.id,
      itemUpdateSuccess: false,
    };
  },
  methods: {
    updateInvoice(invoice) {
      this.$store.commit("UPDATE_INVOICE", invoice);
      this.itemUpdateSuccess = true;
      console.log("Invoice updated", invoice);
    },
  },
  computed: {
    dataContent() {
      return this.$store.state.invoices;
    },
    filteredInvoice() {
      return this.dataContent.filter((invoice) => {
        return invoice.id.match(this.invoiceId) !== null;
      });
    },
  },
  watch: {
    $router() {
      this.invoiceId = this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
