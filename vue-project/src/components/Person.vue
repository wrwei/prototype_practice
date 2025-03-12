<template>
    <div class="person">
        <h2>The sum is: {{ sum }}</h2>
        <button @click="changeSum">Sum+1</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import {ref, watch} from 'vue'
    let sum = ref(0)
    
    function changeSum() {
        sum.value += 1
    }

    //watch
    watch(sum, ()=> {
        
    }) 
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