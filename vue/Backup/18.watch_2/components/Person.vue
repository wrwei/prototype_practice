<template>
    <div class="person">
        <h1>Scenario 2: watching ref objects</h1>
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
        <button @click="changePerson">change person</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref, watch } from 'vue';

    let person = ref({
        name: 'Dave',
        age: 18
    })

    function changeName() {
        person.value.name += '~'
    }

    function changeAge() {
        person.value.age += 1
    }

    function changePerson() {
        person.value = {name:'Will', age:40}
    }

    watch(person, (newValue, oldValue)=> {
        console.log(newValue)
        console.log(oldValue)
    }, {deep:true, immediate: true})
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