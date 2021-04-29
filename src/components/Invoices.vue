<template>
  <div class="wrapper">
    <section class="header">
      <div class="labels">
        <h1 class="labels__title"></h1>
        <div class="counter">
          <p class="counter__text"></p>
        </div>
      </div>
      <div class="functions">
        <select name="status" class="functions__filter">
          <option value="draft"
            ><input type="checkbox" value="draft" />Draft</option
          >
          <option value="pending"
            ><input type="checkbox" value="pending" />Pending</option
          >
          <option value="paid"
            ><input type="checkbox" value="paid" />Paid</option
          >
        </select>
        <button class="create" @click="goToAddPage()">
          <i class="create__icon"> </i>
          New Invoice
        </button>
      </div>
    </section>
    <section class="invoices">
      <tr
        class="invoices__table"
        v-for="invoice in dataContent"
        :key="invoice.id"
        @click="goToEditPage(invoice.id)"
      >
        <td class="invoice">
          <h3 class="invoice__title">
            {{ invoice.id }}
          </h3>
          <p class="invoice__due-date">
            {{ invoice.paymentDue }}
          </p>
          <p class="invoice__name">
            {{ invoice.clientName }}
          </p>
          <h2 class="invoice__price">
            {{ invoice.total }}
          </h2>
          <div class="invoice__status">
            <p class="status__text">
              {{ invoice.status }}
            </p>
          </div>
          <i class="invoice__arrow"> </i>
        </td>
      </tr>
    </section>
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
