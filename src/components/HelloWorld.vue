<template>
  <nav>
    <div class="navicons">
      <img src="/src/assets/logo.svg" />
      <img src="/icon-moon.svg" />
      <img src="/image-avatar.jpg" />
    </div>
  </nav>

  <div class="form-container">
    <h2>New Invoice</h2>
    <form action="/action_page.php">
      <p class="FormSubtitle">Bill From</p>
      <label for="FormStreetAddress">Street Address</label>
      <input type="text" id="FormStreetAddress" name="streetaddress" />

      <div class="citypostcountry-container">
        <div class="city-container">
          <label for="FormCity">City</label>
          <input type="text" id="FormCity" name="city" />
        </div>

        <div class="postcode-container">
          <label for="FormPostcode">Post Code</label>
          <input type="text" id="FormPostcode" name="postcode" />
        </div>

        <div class="country-container">
          <label for="FormCountry">Country</label>
          <input type="text" id="FormCountry" name="country" />
        </div>
      </div>

      <p class="FormSubtitle">Bill To</p>
      <label for="FormClientName">Client's Name</label>
      <input type="text" id="FormClientName" name="clientname" />

      <label for="FormClientEmail">Client's Email</label>
      <input
        type="text"
        id="FormClientEmail"
        name="clientemail"
        placeholder="e.g. email@example.com"
      />

      <label for="FormStreetAddress">Street Address</label>
      <input type="text" id="FormStreetAddress" name="streetaddress" />

      <div class="citypostcountry-container">
        <div class="city-container">
          <label for="FormCity">City</label>
          <input type="text" id="FormCity" name="city" />
        </div>

        <div class="postcode-container">
          <label for="FormPostcode">Post Code</label>
          <input type="text" id="FormPostcode" name="postcode" />
        </div>

        <div class="country-container">
          <label for="FormCountry">Country</label>
          <input type="text" id="FormCountry" name="country" />
        </div>
      </div>

      <br />

      <div class="dateterms-container">
        <div class="date-container">
          <label for="FormInvoiceDate">Invoice Date</label>
          <input
            type="text"
            id="FormInvoiceDate"
            name="invoicedate"
            placeholder="21 Aug 2021"
          />
          <!-- <input type="date" id="FormInvoiceDate" name="invoicedate"> -->
        </div>

        <br /><br />

        <div class="payment-container">
          <label for="FormPaymentTerms">Payment Terms</label>
          <select id="FormPaymentTerms" name="paymentterms">
            <option value="1day">Net 1 Day</option>
            <option value="7days">Net 7 Days</option>
            <option value="14days">Net 14 Days</option>
            <option value="30days">Net 30 Days</option>
          </select>
        </div>
      </div>

      <label for="FormProjectDesc">Project Description</label>
      <input
        type="text"
        id="FormProjectDesc"
        name="projectdescription"
        placeholder="e.g. Graphic Design Service"
      />

      <div class="FormButtons">
        <input type="submit" class="discardbutton" value="Discard" />
        <input type="submit" class="draftbutton" value="Save as Draft" />
        <input type="submit" class="savesendbutton" value="Save & Send" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  height: 100%;
  width: 115px;
  top: 0;
  left: 0;
  background: #252945;
  border-radius: 0 25px 25px 0;
}

.navicons {
  display: flex;
  flex-direction: column;
  margin: 45px;
}

.FormButtons {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;

  .discardbutton {
    background-color: #f8f8fb;
    color: #888eb0;
    font-weight: bold;
  }

  .discardbutton:hover {
    background-color: #dfe3fa;
    color: #888eb0;
    font-weight: bold;
  }

  .draftbutton {
    background-color: #252945;
    color: #888eb0;
    font-weight: bold;
  }

  .draftbutton:hover {
    background-color: #141625;
    color: #dfe3fa;
    font-weight: bold;
  }

  .savesendbutton {
    background-color: #7c5dfa;
    color: white;
    font-weight: bold;
  }

  .savesendbutton:hover {
    background-color: #9277ff;
    color: white;
    font-weight: bold;
  }
}

body {
  font-family: Spartan, sans-serif;
}

h2 {
  padding: 40px;
  font-size: 30px;
}

label {
  font-family: Spartan, sans-serif;
  opacity: 0.5;
  font-size: 15px;
}

.form-container {
  max-width: 1000px;
  padding-left: 200px;
}

.FormSubtitle {
  font-family: Spartan, sans-serif;
  font-weight: Bold;
  color: #7c5dfa;
  margin: 40px 0 26px;
}

#FormClientName {
  margin: 10px 0 30px 0;
}

#FormClientEmail {
  margin: 10px 0 30px 0;
}

#FormProjectDesc {
  margin: 10px 0 30px 0;
}

input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 12px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 15%;
  padding: 14px 20px;
  margin: 8px 8px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

div.container {
  border-radius: 5px;
  background-color: #ffffff;
  padding: 0px 40px;
}

.citypostcountry-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.city-container {
  flex-basis: 33%;
  margin: 10px 30px 0 0;
}

.postcode-container {
  flex-basis: 33%;
  margin: 10px 30px 0 0;
}

.country-container {
  flex-basis: 33%;
  margin: 10px 0 0 0;
}

.dateterms-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 10px 0 30px 0;
}

.date-container {
  flex-basis: 50%;
  margin: 10px 30px 0 0;
}

.payment-container {
  flex-basis: 50%;
  margin: 10px 30px 0 0;
}
</style>
