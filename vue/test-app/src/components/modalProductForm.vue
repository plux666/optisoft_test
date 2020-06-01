<template>
  <div id="modal">
    <div class="inner-modal">
      <form>
        <div>
          <label>Product Name</label>
          <input v-model='productName' type="text">
        </div>
        <div>
          <label>Unit Price</label>
          <input v-model='unitPrice' v-on:keyup='unitPriceValidate'>
        </div>
        <div>
          <label>Units In Stock</label>
          <input v-model='unitsInStock' type='number' v-on:keyup='unitPriceValidate'>
        </div>
        <div>
          <label>Discontinued</label>
          <input v-model='discontinued' type='checkbox'>
        </div>
        <div class="buttons-container">
          <button type='submit' v-on:click='sendForm'>OK</button>
          <button v-on:click='cancelForm'>Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['itemData', 'send', 'cancel'],
    data: function() {
      return {
        productName: this.itemData.productName ? this.itemData.productName : '',
        unitPrice: this.itemData.unitPrice ? this.itemData.unitPrice : '',
        unitsInStock: this.itemData.unitsInStock ? this.itemData.unitsInStock : '',
        discontinued: this.itemData.discontinued ? this.itemData.discontinued : false,
      }
    },
    methods: {
      unitPriceValidate: function(e) {
        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
      },
      sendForm: function(e) {
        e.preventDefault();
        if (this.productName !== '') {
          this.send({
            id: this.itemData.id,
            productName: this.productName,
            unitPrice: this.unitPrice,
            unitsInStock: this.unitsInStock,
            discontinued: this.discontinued
          });
        }
      },
      cancelForm: function(e) {
        e.preventDefault();
        this.cancel();
      }
    }
  }
</script>

<style>
  #modal {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.5)
  }
  .inner-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 400px;
    height: 250px;
    border: solid white;
    border-radius: 10px;

  }
  .inner-modal div {
    margin: 15px;
    height: 25px;
  }
  .inner-modal div label {
    width: 30%;
    padding: 5px;
    float: left;
  }
  .inner-modal div input {
    float: right;
    width: 60%;
    padding: 3px;
    height: 20px;
    font-size: 16px;
    border: solid #2e2e2e 1px;
    border-radius: 5px;
  }
  .buttons-container {
    float: right;
  }
  .buttons-container button {
    height: 35px;
    font-size: 16px;
    margin: 10px;
    border: solid white 0px;
    border-radius: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .buttons-container button[type="submit"] {
    background-color: blue;
    color: white;
  }
</style>
