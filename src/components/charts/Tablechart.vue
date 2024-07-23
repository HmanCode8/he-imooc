<script setup>
import { defineProps } from 'vue'

defineProps({
    columns: {
        type: Array,
        default: () => [
            { title: 'Name', key: 'name' },
            { title: 'Age', key: 'age' },
            { title: 'Address', key: 'address' }
        ]
    },
    tableData: {
        type: Array,
        default: () => [
            { name: 'John Doe', age: 30, address: '123 Main St' },
            { name: 'Jane Smith', age: 25, address: '456 Elm St' },
            { name: 'Sam Green', age: 35, address: '789 Oak St' },
            { name: 'John Doe', age: 30, address: '123 Main St' },
            { name: 'Jane Smith', age: 25, address: '456 Elm St' },
            { name: 'Sam Green', age: 35, address: '789 Oak St' },
            { name: 'John Doe', age: 30, address: '123 Main St' },
            { name: 'Jane Smith', age: 25, address: '456 Elm St' },
            { name: 'Sam Green', age: 35, address: '789 Oak St' }
        ]
    }
})
</script>

<template>
    <div class="table-container w-full">
        <table>
            <thead>
                <tr>
                    <th v-for="col in columns" :key="col.key">{{ col.title }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
                    <td v-for="col in columns" :key="col.key">{{ row[col.key] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
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