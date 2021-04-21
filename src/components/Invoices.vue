<template>
    <div class="wrapper">
        <section class="header">
            <div class="labels">
                <h1 class="labels__title">

                </h1>
                <div class="counter">
                    <p class="counter__text">
                        
                    </p>
                </div>
            </div>
            <div class="functions">
                <select name="status" class="functions__filter">
                    <option value="draft"><input type="checkbox" value="draft">Draft</option>
                    <option value="pending"><input type="checkbox" value="pending">Pending</option>
                    <option value="paid"><input type="checkbox" value="paid">Paid</option>
                </select>
                <button class="create">
                    <i class="create__icon">

                    </i>
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