<template>
    <div class="person">
        <h2>Current sum:{{ sum }} </h2>
        <button @click="add">Sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref, onMounted, onBeforeUpdate, onUpdated, onBeforeMount, onUnmounted, onBeforeUnmount} from 'vue'

    let sum = ref(0)

    function add() {
        sum.value += 1
    }

    //creation
    console.log('creation')

    //mounting
    onMounted(()=>{
        console.log('Before mount')
    })

    onMounted(()=>{
        console.log('Mounted')
    })

    onBeforeUpdate(()=>{
        console.log('Before update')
    })

    onUpdated(()=>{
        console.log('Updated')
    })

    onBeforeUnmount(()=>{
        console.log('Before unmount')
    })

    onUnmounted(()=>{
        console.log('Unmounted')
    })
</script>

<style scoped>
.person{
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>