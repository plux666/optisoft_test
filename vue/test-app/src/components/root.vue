<template>
  <div id="app">
    <Modal v-if='edit'
      :itemData='item'
      :send='send'
      :cancel='cancel'/>
    <button class='new-button' v-on:click='addNew'>
      add new record
    </button>
    <Table
      v-bind:key='343131231'
      v-bind:data="tableData"
      :deleteItem='deleteItem'
      :editItem='editItem'/>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

import Table from './table.vue'
import Modal from './modalProductForm.vue'

export default {
  name: 'Root',
  methods: {
    addNew: function(e) {
      e.preventDefault();

      this.edit = true;
      this.item = 'new';
    },
    send: function(newItem) {
      // if Item has no id => item is new and added
      // otherwise it is edited
      if (!newItem.id) {
        newItem.id = uuidv4()
        this.tableData.push(newItem);
        this.edit = false;

        return
      } else {
        let index = this.tableData.findIndex(v => {
          if (v.id === newItem.id) {
            return true
          }
        })
        this.tableData.splice(index, 1, newItem)
      }

      this.edit = false;
    },
    cancel: function() {
      this.edit = false;
      this.item = null;
    },
    deleteItem: function(id) {
      let index = this.tableData.findIndex(v => {
        if (v.id === id) {
          return true
        }
      })

      this.tableData.splice(index, 1)
    },
    editItem: function(id) {
      let index = this.tableData.findIndex(v => {
        if (v.id === id) {
          return true
        }
      });
      this.item = Object.assign({}, this.tableData[index]);
      this.edit = true;
    },
  },
  data: function() {
      return {
        edit: false,
        item: null,
        tableData: [
        {
          id: uuidv4(),
          productName: '12',
          unitPrice: 3.00,
          unitsInStock: 0,
          discontinued: true
        },
        {
          id: uuidv4(),
          productName: 'Chai',
          unitPrice: 18.00,
          unitsInStock: 39,
          discontinued: false
        },
        {
          id: uuidv4(),
          productName: 'Chang',
          unitPrice: 19.00,
          unitsInStock: 17,
          discontinued: false
        },
        {
          id: uuidv4(),
          productName: 'Aniseed Syrup',
          unitPrice: 10.00,
          unitsInStock: 12,
          discontinued: false
        },
        {
          id: uuidv4(),
          productName: "Chef Anton's Cajun Seasoning",
          unitPrice: 22.00,
          unitsInStock: 53,
          discontinued: false
        },
        {
          id: uuidv4(),
          productName: "Chef Anton's Gumbo Mix",
          unitPrice: 21.35,
          unitsInStock: 0,
          discontinued: true
        }
      ]
    }
  },
  components: {
    Table,
    Modal
  }
}
</script>

<style>
#app {
  font-family: Source Sans Pro, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: solid;
  width: 700px;
}
.new-button {
  background-color: #60BDB8;
  color: white;
  margin: 5px;
  font-size: 16px;
  height: 35px;
  padding: 5px;
  border: solid 0px;
  font-weight: bold;
}
</style>
