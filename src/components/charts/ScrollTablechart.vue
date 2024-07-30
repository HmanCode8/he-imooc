<script setup>
import { defineProps, ref } from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

const scrollRef = ref(null);

const props = defineProps({
  tableTitles: {
    type: Array,
  },
  tableData: {
    type: Array,
  }
});
console.log(props.tableTitles);
const data = props.tableData.map((item) => {
  return {
    name: item[0],
    age: item[1],
    address: item[2],
    phone: item[3],
  };
});
</script>

<template>
  <div class="w-full">
    <div class="w-full  py-2 bg-[#0C3D73] flex">
      <div class="flex-1 text-center" v-for="(col, index) in tableTitles" :key="index">{{ col }}</div>
    </div>
    <div class="table-container w-full h-60" ref="scrollRef">
      <vue3-seamless-scroll class="seamless" :list="data" :step="0.5" :hover="true">
        <ul class="w-full ">
          <li v-for="(item, index) in tableData" :key="index" class="liStyle w-full  flex h-8">

            <div class="flex-1  flex items-center justify-center" v-for="(col, index) in item" :key="index">
              <span>{{ col }}</span>
            </div>
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