<script setup>
import { ref, onMounted, defineProps } from "vue";

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
      { id: 1, name: "盐城市盐都区", value: 30, percent: "24%" },
      { id: 2, name: "盐城市盐都区", value: 30, percent: "24%" },
      { id: 3, name: "盐城市盐都区", value: 30, percent: "24%" },
      { id: 4, name: "盐城市盐都区", value: 30, percent: "24%" },
      { id: 5, name: "盐城市盐都区", value: 30, percent: "24%" }
    ]
  }
});

const ths = ref([
  { title: "", key: 0, prop: "id" },
  { title: "区域", key: 1, prop: "name" },
  { title: "数量/个", key: 2, prop: "value" },
  { title: "占比/%", key: 3, prop: "percent" }
]);
</script>

<template>
  <div class="table-container w-full">
    <table>
      <thead>
        <tr>
          <th v-for="(col) in ths" :key="col.id">{{ col.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(col, colIndex) in ths" :key="col.key">
            <div v-if="colIndex === 0" :class="`warningtype_${rowIndex + 1} bg-cover bg-center h-3 w-15`">{{
              row[col.prop]
              }}</div>
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
  padding: 8px 12px;
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

@for $i from 1 through 4 {
  .warningtype_#{$i} {
    background-image: url("@/assets/imgs/warning/TOP#{$i}.png");
  }
}
</style>