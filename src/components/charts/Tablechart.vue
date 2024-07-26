<script setup>
import { toRef, ref, watchEffect } from 'vue'

const tableBody = ref(null)

const props = defineProps({
    columns: {
        type: Array,
        default: () => []
    },
    tableData: {
        type: Array,
        default: () => []
    }
})

const columnData = toRef(props, 'columns')
const tableDatas = toRef(props, 'tableData')

watchEffect(() => {
    columnData.value = props.columns
    tableDatas.value = props.tableData
})

</script>

<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th v-for="col in columnData" :key="col.key">{{ col.title }}</th>
                </tr>
            </thead>
            <tbody ref="tableBody">
                <tr v-for="(row, rowIndex) in tableDatas" :key="rowIndex">
                    <td v-for="col in columnData" :key="col.key">{{ row[col.key] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.table-container {
    /* max-height: 400px; */
    /* Set a max height for the table container */
    overflow-y: auto;
    /* Enable vertical scrolling */
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    /* padding: 1px; */
    text-align: center;
}

th {
    background-color: #1c3c6f;
    color: #A9D4E6;
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