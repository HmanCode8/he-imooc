<script setup>
import { ref } from "vue";

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
      { id: 1, name: "盐城市液化气...", value1: 1.83, value2: 6 },
      { id: 2, name: "盐城市液化气...", value1: 1.83, value2: 6 },
      { id: 3, name: "盐城市液化气...", value1: 1.83, value2: 6 },
      { id: 4, name: "盐城市液化气...", value1: 1.83, value2: 6 },
      { id: 5, name: "盐城市液化气...", value1: 1.83, value2: 6 }
    ]
  }
});

const ths = ref([
  { title: "", key: 0, prop: "id" },
  { title: "单位", key: 1, prop: "name" },
  { title: "响应时长(h)", key: 2, prop: "value1" },
  { title: "处置时长(h)", key: 3, prop: "value2" }
]);
</script>

<template>
  <div class="table-container w-full m-2">
    <table>
      <thead>
        <tr>
          <th v-for="(col) in ths" :key="col.id" class="h-9">{{ col.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(col, colIndex) in ths" :key="col.key">
            <div v-if="colIndex === 0" :class="`warningtype_${rowIndex + 1} bg-size h-9 w-7 ml-10`"></div>
            <div v-else class="">{{ row[col.prop] }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  // padding: 8px 12px;
  padding: 8;
  text-align: center;
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

@for $i from 1 through 3 {
  .warningtype_#{$i} {
    background-image: url("@/assets/imgs/warning/medal#{$i}.png");
  }
}
</style>