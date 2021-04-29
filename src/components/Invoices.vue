<template>
  <div class="wrapper">
    <section class="header">
      <div class="labels">
        <h1 class="labels__title">Invoices</h1>
        <div class="counter">
          <p class="counter__text">
            There are X total invoices
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
          <svg
            class="create__icon"
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
              fill="#7C5DFA"
              fill-rule="nonzero"
            />
          </svg>
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
