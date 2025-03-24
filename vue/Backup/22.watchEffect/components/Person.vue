<template>
    <div class="person">
        <h1>When temp reaches 60 or above, or height reaches 80 or above, send request to server</h1>
        <h2>Current temperature: {{ temp }}</h2>
        <h2>Current height: {{ height }}</h2>
        <button @click="changeTemp">Temp+10</button> <br>
        <button @click="changeHeight">Height+10</button>

    </div>
</template>

<script setup lang="ts" name="Person">
    import {ref, watch, watchEffect} from 'vue'
    let temp = ref(10)
    let height = ref(10)


    function changeTemp() {
        temp.value += 10
    }

    function changeHeight() {
        height.value += 10
    }

    // watch([temp, height], (newValue,oldValue)=>{
    //     console.log(newValue, oldValue)
    //     let [newTemp, newHeight] = newValue
    //     if(newTemp >=60 || newHeight>=80) {
    //         console.log("Server request sent!")
    //     }
    // })

    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 80) {
            console.log("Server request sent!")
        }
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