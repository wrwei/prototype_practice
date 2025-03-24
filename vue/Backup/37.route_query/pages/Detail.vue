<template>
    <ul class="news-list">
        <li>编号：{{ route.query.id }}</li>
        <li>标题：{{ route.query.title }}</li>
        <li>内容：{{ route.query.content }}</li>
    </ul>
</template>


<script setup lang="ts" name="About">
    import {useRoute} from 'vue-router'
    import { toRefs } from 'vue';

    const route = useRoute()
    // console.log('@', route)
    let {query} = toRefs(route)
</script>

<style>
</style>