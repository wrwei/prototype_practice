<template>
    <div>
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <RouterLink to="/news/detail">{{news.title}}</RouterLink>
            </li>
        </ul>
        <div class="new-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
    import {reactive} from 'vue'
    import { RouterView, RouterLink } from 'vue-router';

    const newsList = reactive([
        {id:'asdfasdf1', title:'第一个新闻', content:'新闻内容1'}, 
        {id:'asdfasdf2', title:'第二个新闻', content:'新闻内容1'}, 
        {id:'asdfasdf3', title:'科技部火炬计划', content:'鹏程实验室'}, 
        {id:'asdfasdf4', title:'鹏程实验室', content:'新闻内容4'}
    ])
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