<template>
  <div>
    <h1>Add new invoice</h1>
    <div>
      <p>ID</p>
      <input v-model="this.invoiceToAdd.id" />
    </div>
    <div>
      <p>Description</p>
      <input v-model="this.invoiceToAdd.description" />
    </div>
    <div>
      <p>Client name</p>
      <input v-model="this.invoiceToAdd.clientName" />
    </div>
    <div>
      <p>Client email</p>
      <input v-model="this.invoiceToAdd.clientEmail" />
    </div>
    <div>
      <p>Created at</p>
      <input v-model="this.invoiceToAdd.createdAt" />
    </div>
    <div>
      <p>Payment due</p>
      <input v-model="this.invoiceToAdd.paymentDue" />
    </div>
    <div>
      <p>Payment terms</p>
      <input v-model="this.invoiceToAdd.paymentTerms" />
    </div>
    <div>
      <p>Payment status</p>
      <input v-model="this.invoiceToAdd.status" />
    </div>
    <div style="margin-top:64px;">
      <h2 style="font-weight:bold;">Client address</h2>
      <p>Street</p>
      <input v-model="this.invoiceToAdd.clientAddress.street" />
      <p>City</p>
      <input v-model="this.invoiceToAdd.clientAddress.city" />
      <p>Post code</p>
      <input v-model="this.invoiceToAdd.clientAddress.postCode" />
      <p>Country</p>
      <input v-model="this.invoiceToAdd.clientAddress.country" />
    </div>
    <div style="margin-top:64px;">
      <h2 style="font-weight:bold;">Items</h2>
      <div v-for="(item, index) in this.invoiceToAdd.items" :key="item.index">
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
    <button @click="addInvoice(this.invoiceToAdd)">
      Add invoice
    </button>
    <br />
    <div v-if="this.itemAddSuccess">Item was successfully added.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoiceToAdd: {
        id: this.$route.params.id,
        description: "",
        clientName: "",
        clientEmail: "",
        createdAt: "",
        paymentDue: "",
        paymentTerms: "",
        status: "",
        clientAddress: {
          street: "",
          city: "",
          postCode: "",
          country: "",
        },
        items: [
          {
            name: "",
            quantity: "",
            price: "",
            total: "",
          },
        ],
      },
      itemAddSuccess: false,
    };
  },
  methods: {
    addInvoice(invoice) {
      this.$store.commit("ADD_INVOICE", invoice);
      this.itemAddSuccess = true;
      console.log("Invoice added", invoice);
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
