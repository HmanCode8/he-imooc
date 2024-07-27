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
  <div class="w-full h-60">
    <!-- <div class="w-full">
      <table class="w-full">
        <thead> 
          <tr class>
            <th
              style="background-color: aquamarine;"
              v-for="col in columns"
              :key="col.key"
            >{{ col.title }}</th>
          </tr>
        </thead>
      </table>
    </div> -->
    <div class="w-full flex">
        <div class="flex-1 text-center" v-for="col in columns" :key="col.key">{{col.title}}</div>
      </div>
    <div class="table-container w-full h-60">
      
      <vue3-seamless-scroll class="seamless" :list="tableData" :step="0.4">
        <ul class="w-full">
          <li
            v-for="(item, index) in tableData"
            :key="index"
            class="liStyle w-full text-center flex "
          >
            <div class="flex-1 text-center">{{item.name}}</div>
            <div class="flex-1 text-center">{{item.age}}</div>
            <div class="flex-1 text-center">{{item.address}}</div>
          </li>
        </ul>
      </vue3-seamless-scroll>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  overflow-y: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.tableBodyStyle {
  width: 100%;
}

ul li:nth-child(even) {
  background-color: #132d5c;
}

ul li:hover {
  background-color: #4276b2;
}

th,
td {
  /* padding: 1px; */
  text-align: center;
}

th {
  background-color: #1c3c6f;
  color: #a9d4e6;
  position: sticky;
  /* Make the header sticky */
  top: -6px;
  /* Stick to the top */
  z-index: 1;
  /* Ensure it is above other content */
}

tbody tr:nth-child(even) {
  background-color: #132d5c;
}

tbody tr:hover {
  background-color: #4276b2;
}
</style>