<template>
    <div>
        <ul>
            <li><a href="#">新闻001</a></li>
            <li><a href="#">新闻002</a></li>
            <li><a href="#">新闻003</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="News">
</script>

<style scoped>
.news{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}
.news ul{
    margin-top: 30px;
    list-style: none;
    text-decoration: none;
    color: #64967e;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>