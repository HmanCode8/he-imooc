<script setup>
import { defineProps, onMounted, ref, computed } from "vue";

import { ElTable, ElTableColumn } from "element-plus";

import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

const tableBody = ref(null);

onMounted(() => {
  // console.log(tableBody.value, 'tableBody')
});

const props = defineProps({
  columns: {
    type: Array,
    default: () => [
      { title: "Name", key: "name" },
      { title: "Age", key: "age" },
      { title: "Address", key: "address" }
    ]
  },
  tableData: {
    type: Array,
    default: () => [
      { name: "John Doe", age: 30, address: "123 Main St" },
      { name: "Jane Smith", age: 25, address: "456 Elm St" },
      { name: "Sam Green", age: 35, address: "789 Oak St" },
      { name: "John Doe", age: 30, address: "123 Main St" },
      { name: "Jane Smith", age: 25, address: "456 Elm St" },
      { name: "Sam Green", age: 35, address: "789 Oak St" },
      { name: "John Doe", age: 30, address: "123 Main St" },
      { name: "Jane Smith", age: 25, address: "456 Elm St" },
      { name: "Sam Green", age: 35, address: "789 Oak St" }
    ]
  }
});
</script>

<template>
  <div class="table-container w-full">
    <table class="tboby">
      <thead>
        <tr class="z-999">
          <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
        </tr>
      </thead>
      <vue3-seamless-scroll class="seamless" :list="tableData" :step="0.4">
        <tbody ref="tableBody">
          <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
            <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
          </tr>
        </tbody>
      </vue3-seamless-scroll>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  overflow-x: auto;
}

.tboby {
  overflow-y: scroll;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 12px;
  text-align: left;
}

th {
  background-color: #1c3c6f;
  color: #fff;
}

tbody tr:nth-child(even) {
  background-color: #132d5c;
}

tbody tr:hover {
  background-color: #4276b2;
}
</style>