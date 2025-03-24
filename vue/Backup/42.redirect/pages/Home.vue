<template>
    <div class="home">
        <img src="https://images.dog.ceo/breeds/pembroke/n02113023_15144.jpg" alt="">
    </div>
</template>

<script setup lang="ts" name="Home">
    import {onMounted} from 'vue'
    import { useRouter } from 'vue-router';

    const router = useRouter()
    onMounted(()=>{
        setTimeout(() => {
            // 让路由实现跳转
            router.push('/news')
        }, 3000);
    })
</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120%;
}
</style>