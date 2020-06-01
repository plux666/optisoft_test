<template>
  <div id="table">
    <table>
      <th>Product Name</th>
      <th>Unit Price</th>
      <th>Units In Stock</th>
      <th>Discontinued</th>
      <th></th>
      <TableRow v-for="product in tableData"
        v-bind:key="product.id"
        :product="product"
        :deleteItem='deleteItem' :editItem='editItem'>

      </TableRow>
    </table>
  </div>
</template>

<script>
import TableRow from './tableRow.vue'

export default {
  name: 'Table',
  props: ['data', 'editItem', 'deleteItem'],
  computed: {
    tableData: function() {
      return this.data
    }
  },
  components: { TableRow }
}
</script>

<style>
 #table table {
   border: solid gray 1px;
   border-radius: 0px;
   padding: 10px;
   margin: 0px;
   width: 700px;
   border-collapse: collapse;

 }
 #table td {
   border: solid gray 1px;
   padding: 10px;
   word-break: normal;
 }
 #table button {
   border: solid 0px;
   background-color: #01B1FF;
   color: white;
   height: 30px;
   margin: 3px;
   cursor: pointer;
   font-weight: bold;
 }
 #table tr:nth-child(2n) {
   background-color: #f2f2f2;
 }
 #table th {
   background-color: #f2f2f2;
 }
 #table {
   width: 700px;
 }
</style>
