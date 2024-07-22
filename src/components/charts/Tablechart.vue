<template>
    <el-table :data="tableData" :header-cell-style="{
        background: '#162444',
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'
    }" :cell-style="{
        background: rowIndex % 2 === 0 ? '#003366' : '#004080',
        color: '#ffffff',
        textAlign: 'center'
    }" style="width: 100%">
        <el-table-column prop="region" label="区域"></el-table-column>
        <el-table-column prop="total" label="底数(座)"></el-table-column>
        <el-table-column prop="class1" label="I类"></el-table-column>
        <el-table-column prop="class2" label="II类"></el-table-column>
        <el-table-column prop="class3" label="III类"></el-table-column>
        <el-table-column prop="class4" label="IV类"></el-table-column>
        <el-table-column prop="class5" label="V类"></el-table-column>
    </el-table>
</template>

<script>
export default {
    name: 'CustomTable',
    data() {
        return {
            tableData: [
                { region: '市直', total: 207, class1: 2, class2: 78, class3: 67, class4: 28, class5: 22 },
                { region: '盐都区', total: 207, class1: 2, class2: 78, class3: 67, class4: 28, class5: 22 },
                { region: '亭湖区', total: 207, class1: 2, class2: 78, class3: 67, class4: 28, class5: 22 },
                { region: '大丰区', total: 207, class1: 2, class2: 78, class3: 67, class4: 28, class5: 22 },
                { region: '城南新区', total: 207, class1: 2, class2: 78, class3: 67, class4: 28, class5: 22 },
                { region: '滨海县', total: 207, class1: 2, class2: 78, class3: 67, class4: 28, class5: 22 },
                { region: '射阳县', total: 207, class1: 2, class2: 78, class3: 67, class4: 28, class5: 22 },
                { region: '阜宁县', total: 207, class1: 2, class2: 78, class3: 67, class4: 28, class5: 22 }
            ]
        }
    }
}
</script>

<style scoped></style>