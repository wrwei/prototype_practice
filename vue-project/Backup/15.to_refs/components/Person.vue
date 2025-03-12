<template>
    <div class="person">
        <h2>name: {{ person.name }}</h2>
        <h2>age: {{ person.age }}</h2>
        <button @click="changeName">change name</button>
        <button @click="changeAge">change age</button>
    </div>
</template>


<script setup lang="ts" name="Person">
    import {reactive, toRefs} from 'vue'

    //data
    let person = reactive({
        name: 'David',
        age:18
    })

    let {name, age} = toRefs(person)

    function changeName() {
        name.value += '~'
    }
    function changeAge() {
        age.value += 1
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