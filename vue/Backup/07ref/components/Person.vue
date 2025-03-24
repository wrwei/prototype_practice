<template>
    <div class="person">
        <h2>name: {{name}}</h2>
        <h2>age: {{age}}</h2>
        <h2>address: {{address}}</h2>
        <button @click="changeName">Edit Name</button>
        <button @click="changeAge">Edit Age</button>
        <button @click="changeAddress">Edit Age</button>
        <button @click="showTel">check contact</button>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Person',
        
    }
</script>

<script setup lang="ts">
    import {ref} from 'vue'

    let name= ref('Will')
    let age= ref(40)
    let address=ref('Lancaster')
    let tel = '13888888888' 

    function changeName() {
        name.value='William'
    }

    function changeAge() {
        age.value = 21
    }

    function changeAddress() {
        address.value = 'Beijing'
    }

    function showTel() {
        alert(tel)
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
</style>