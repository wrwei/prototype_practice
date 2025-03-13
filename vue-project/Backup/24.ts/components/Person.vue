<template>
    <div class="person">
        <h2>Person 1: {{ personList[0].name }}, age: {{ personList[0].age }}</h2>
        <h2>Person 2: {{ personList[1].name }}, age: {{ personList[1].age }}</h2>
        <h2>Person 3: {{ personList[2].name }}, age: {{ personList[2].age }}</h2>
        <button @click="changePersonTwo">Click me</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import {type PersonInter, type Persons} from '@/types'
    import { reactive } from 'vue'

    let person:PersonInter = {
        id:'123321321', 
        name:'Dave', 
        age:60
    }

    let personList: Persons = reactive([
        {id: '123', name:'Will', age: 30},
        {id: '1234', name:'Dave', age: 40},
        {id: '12345', name:'Gabe', age: 50}
    ])

    function changePersonTwo () {
        personList[1].name = 'Nicole'
        personList[1].age = 28
    }
</script>

<style scoped>
    .person{
        background-color: #dda;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 5px;
    }
    li{
        font-size: 20px;
    }
</style> 