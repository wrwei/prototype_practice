<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <h3>Name is: {{ countStore.name }}, location is in {{ countStore.address }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import {ref, reactive, toRef} from 'vue'
    import { useCountStore } from '@/store/count'

    const countStore = useCountStore()
    // let sum = toRef(countStore.sum)
    let n = ref(1) //user selection

    
    function add() {
        // 第一种方法
        // countStore.sum += n.value

        // 第二种方法
        // countStore.$patch({
        //     sum:888,
        //     name:'Lancaster University',
        //     address:'Bailrigg, Lancaster, UK'
        // })

        // 第二种方法
        countStore.increment(n.value)

    }

    function minus() {
        countStore.sum -= n.value
    }
</script>

<style>
.count{
    background-color: skyblue;
    padding: 10px; 
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select, button {
    margin: 0 5px;
    height: 25px;
}
</style>