<template>
  <tr>
    <td>{{ product.productName }}</td>
    <td>{{ product.unitPrice ? ('$' + product.unitPrice) : '' }}</td>
    <td>{{ product.unitsInStock }}</td>
    <td>{{ product.discontinued }}</td>
    <td>
      <button v-on:click='(e)=>{editItem(product.id)}'>Edit</button>
      <button v-on:click='(e)=>{deleteItem(product.id)}'>Delete</button>
    </td>
  </tr>
</template>

<script>

export default {
  name: 'TableRow',
  props: ['product', 'editItem', 'deleteItem']
}
</script>

<style>
</style>
