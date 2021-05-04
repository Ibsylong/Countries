<template>
  <div class="wrapper">
    <section class="header">
      <div class="labels">
        <h1 class="labels__title">
          Invoices
        </h1>
        <div class="counter">
          <p class="counter__text">
            There are {{this.dataContent.length}} total invoices
          </p>
        </div>
      </div>
      <div class="functions">
        <form action="" class="filter">
          <div class="filter__multiSelect">
            <div class="filter__selectBox" @mouseover="showCheckboxes()">
              <select name="status" class="filter__select">
                <option class="filter__text"> Filter by status</option>
              </select>
              <div class="filter__overSelect"></div>
            </div>
            <div id="filter__checkboxes">
              <label for="draft">
                <input type="checkbox" id="draft" />Draft</label
              >
              <label for="pending">
                <input type="checkbox" id="pending" />Pending</label
              >
              <label for="paid"> <input type="checkbox" id="paid" />Paid</label>
            </div>
          </div>
        </form>
        <button class="create" @click="goToAddPage()">
          <div class="create__circle">
            <img class="create__plus" :src="require('@/assets/icon-plus.svg')">
          </div>
            New Invoice
        </button>
      </div>
    </section>
    <section class="invoices">
        <div class="invoice"         
        v-for="invoice in dataContent"
        :key="invoice.id"
        @click="goToEditPage(invoice.id)">
          <h3 class="invoice__id">
            <span class="invoice__hashTag">#</span>{{ invoice.id }}
          </h3>
          <p class="invoice__dueDate">
            <span>Due </span>{{ invoice.paymentDue }}
          </p>
          <h3 class="invoice__name">
            {{ invoice.clientName }}
          </h3>
          <h2 class="invoice__price">
            <span>£</span>{{ invoice.total }}
          </h2>
          <div class="invoice__status">
            <h3 class="status__text" v-bind:class="{}">
              {{ invoice.status }}
            </h3>
          </div>
          <i class="invoice__arrow"> </i>
        </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expanded: false,
      checkboxes: null,
    };
  },
  computed: {
    dataContent() {
      return this.$store.state.invoices;
    },
  },
  methods: {
    showCheckboxes() {
      this.checkboxes = document.getElementById("filter__checkboxes");
      if (!this.expanded) {
        this.checkboxes.style.display = "block";
        this.expanded = true;
      } else {
        this.checkboxes.style.display = "none";
        this.expanded = false;
      }
    },
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
