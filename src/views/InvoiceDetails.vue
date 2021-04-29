<template>
    <section class="functions">
        <div class="status">
            <p class="status__label">status</p>
            <p class="status__statusText">Pending</p>
        </div>
        <button class="functions__edit">Edit</button>
        <button class="functions__delete">Delete</button>
        <button class="functions__markPaid">Mark as Paid</button>
    </section>
    <section class="details">
        <h1 class="details__invoiceId"><span>#</span>

        </h1>
        <p class="details__invoiceDescription"></p>
        <div class="senderAddress">
            <p class="senderAdress__street"></p>
            <p class="senderAddress__city"></p>
            <p class="senderAddress__postCode"></p>
            <p class="senderAddress__country"></p>
        </div>
        <div class="dates">
            <p class="dates__invoiceDateLabel">Invoice Date</p>
            <h2 class="dates__invoiceDate"></h2>
            <p class="dates__paymentDueLabel">Payment Due</p>
            <h2 class="dates__paymentDueDate"></h2>
        </div>
        <div class="client">
            <h2 class="client__name"></h2>
            <p class="client__street"></p>
            <p class="client__city"></p>
            <p class="client__postCode"></p>
            <p class="client__country"></p>
        </div>
        <div class="email">
            <p class="email__label">Sent to</p>
            <h2 class="email__emailAdress">

            </h2>
        </div>
        <div class="items">
            <div class="labels">
                <p class="labels__itemName">Item Name</p>
                <p class="labels__itemQty">QTY.</p>
                <p class="labels__itemprice">Price</p>
                <p class="labels__itemTotal">Total</p>
            </div>

            <div class="boughtItems">                
                <h3 class="boughtItems_itemName"></h3>
                <h3 class="boughtItems_itemQty"></h3>
                <h3 class="boughtItems__itemprice"></h3>
                <h3 class="boughtItems__itemTotal"></h3>
            </div>
            <div class="totalPrice">
                <p class="totalPrice__Label">Amount Due</p>
                <h1 class="totalPrice__price"></h1>
            </div>
        </div>
    </section>
</template>