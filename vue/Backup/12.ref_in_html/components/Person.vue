<template>
    <div class="person">
        <h1>China</h1>
        <h2 ref="title2">Beijing</h2>
        <h3>Tsinghua</h3>
        <button @click="showLog">Click me to log h2</button>

    </div>
</template>

<script setup lang="ts" name="Person">
    import {ref} from 'vue'

    //create a title2 to store the contents of the ref
    let title2  = ref()

    function showLog() {
        console.log(title2.value) 
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