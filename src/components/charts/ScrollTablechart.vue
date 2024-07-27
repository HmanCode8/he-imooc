<script setup>
import { defineProps, onMounted, ref, computed } from "vue";

import { ElTable, ElTableColumn } from "element-plus";

import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

const tableBody = ref(null);
const scrollRef = ref(null);

const array = ref([]);
onMounted(() => {
  
  if(props.tableData.length<10){
    console.log("ccccccccccccccc");
    let array = [];
    props.tableData.forEach(element=>{
      array.push(element);
    });
    props.tableData.forEach(element=>{
      array.push(element);
    });


    console.log("ccccccccccccccc",array.length);

    
  }
  setTimeout(() => {
    scroll();
  }, 2000);
});

let timer = null;
let tableRef = ref(null);
const scroll = () => {
  // 在执行新的计时器前将之前的计时器清除
  if (timer) clearInterval(timer);
  let status = true;
  // 获取表格滚动区域的dom
  const scrollDom = scrollRef.value;

  // 增加监听事件鼠标移入停止滚动
  scrollDom.addEventListener("mouseover", () => {
    status = false;
  });
  // 鼠标移出恢复滚动
  scrollDom.addEventListener("mouseout", () => {
    status = true;
  });

  // 设置每秒滚动一行
  timer = setInterval(() => {
    if (status) {
      // 设置每次滚动的像素
      scrollDom.scrollTop += 18;
      console.log("pppppppppppppppppp", scrollDom.scrollTop);
      // 当滚动到底部时修改scrollTop回到顶部
      if (
        scrollDom.scrollHeight -
          (scrollDom.clientHeight + scrollDom.scrollTop) <
        1
      ) {
        scrollDom.scrollTop = 0;
      }
    }
  }, 1000);
};


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
    ]
  }
});
</script>

<template>
  <div class="w-full h-60">
    <div class="w-full flex">
      <div class="flex-1 text-center" v-for="col in columns" :key="col.key">{{col.title}}</div>
    </div>
    <div class="table-container w-full h-60" ref="scrollRef">
      <!-- <vue3-seamless-scroll class="seamless" :list="tableData" :step="0.4" :hover="true"> -->
      <ul class="w-full">
        <li v-for="(item, index) in array" :key="index" class="liStyle w-full text-center flex">
          <div class="flex-1 text-center">{{item.name}}</div>
          <div class="flex-1 text-center">{{item.age}}</div>
          <div class="flex-1 text-center">{{item.address}}</div>
        </li>
      </ul>
      <!-- </vue3-seamless-scroll> -->
    </div>
  </div>
</template>

<style scoped>
.table-container {
  overflow-y: auto;
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