<template>
    <div class="person">
        <h1>Scenario 3: watching ref and reactive objects</h1>
        <h2>Name: {{ person.name }}</h2>
        <h2>Age: {{ person.age }}</h2>
        <h2>Car: {{ person.car.c1 }}, {{ person.car.c2 }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="changefc">change first car</button>
        <button @click="changesc">change second car</button>
        <button @click="changeCars">change all cars</button>

    </div>
</template>

<script setup lang="ts" name="Person">
    import { reactive, watch, ref } from 'vue';

    let person = reactive({
        name: 'Dave',
        age: 18,
        car: {
            c1: 'merc',
            c2: 'bmw'
        }
    })

    function changeName() {
        person.name += '~'
    }

    function changeAge() {
        person.age = 40
    }

    function changefc () {
        person.car.c1 = 'ddd'
    }

    function changesc() {
        person.car.c2 = 'eee'
    }

    function changeCars() {
        person.car = {c1:'dddd', c2:'eeee'}
    }

    watch(()=>{return person.name}, (newValue, oldValue)=>{
        console.log('Person name changed', newValue, oldValue)
    })

    watch(()=>{return person.car}, (newValue, oldValue)=>{
        console.log('Car changed', newValue, oldValue)
    }, {deep:true})
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