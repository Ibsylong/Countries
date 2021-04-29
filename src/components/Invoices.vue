<template>
    <div class="wrapper">
        <section class="header">
            <div class="labels">
                <h1 class="labels__title">
                    Invoices
                </h1>
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
                                <input type="checkbox" id="draft" />Draft</label>
                            <label for="pending">
                                <input type="checkbox" id="pending" />Pending</label>
                            <label for="paid">
                                <input type="checkbox" id="paid" />Paid</label>
                        </div>
                    </div>
                </form>
                <button class="create">
                    <svg class="create__icon" width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fill-rule="nonzero"/>
                    </svg>
                    New Invoice
                </button>
            </div>
        </section>
        <section class="invoices">
            <tr class="invoices__table">
                <th class="invoice">
                    <h3 class="invoice__title">

                    </h3>
                    <p class="invoice__due-date">

                    </p>
                    <p class="invoice__name">

                    </p>
                    <h2 class="invoice__price">

                    </h2>
                    <div class="invoice__status">
                        <p class="status__text">

                        </p>
                    </div>
                    <i class="invoice__arrow">
                        
                    </i>
                </th>
            </tr>
        </section>
    </div>
</template>

<script>
export default{
    data(){
        return{
            expanded: false,
            checkboxes: null

        };
    },
    methods:{
        showCheckboxes() {
        this.checkboxes = document.getElementById("filter__checkboxes");
        if (!this.expanded) {
            this.checkboxes.style.display = "block";
            this.expanded = true;
        } else {
            this.checkboxes.style.display = "none";
            this. expanded = false;
        }
        }
    }
}
</script>
