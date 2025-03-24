<template>
    <div>
        <h2>Hello world, this is About!</h2>
    </div>
</template>

<script setup lang="ts" name="About">
    import { onMounted, onUnmounted } from 'vue';

    onMounted(()=>{
        console.log('About mounted')
    })

    onUnmounted(()=>{
        console.log('About unmounted')
    })
</script>

<style scoped>
.about{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
}
</style>