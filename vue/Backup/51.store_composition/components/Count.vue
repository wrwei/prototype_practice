<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}</h2>
        <h3>School is: {{ school }}, address is: {{ address }}</h3>
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
    import { storeToRefs } from 'pinia'

    const countStore = useCountStore()
    // let sum = toRef(countStore.sum)
    let n = ref(1) //user selection

    const {sum, school, address} = storeToRefs(countStore)

    function add() {
        sum.value += n.value
    }

    function minus() {
        sum.value -= n.value
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