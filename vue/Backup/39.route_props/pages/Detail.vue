<template>
    <ul class="news-list">
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </ul>
</template>


<script setup lang="ts" name="About">
    defineProps(['id', 'title', 'content'])
</script>

<style>
</style>