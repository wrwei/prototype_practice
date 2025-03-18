<template>
    <div>
        <ul>
            <li v-for="news in newsList" :key="news.id">            
                <!-- 第一种 -->
                <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{news.title}}</RouterLink> -->
                <!-- 第二种 -->
                 <RouterLink :to="{
                    name:'xiangqing',
                    params:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                 }">
                 {{ news.title }}
                 </RouterLink>
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
        {id:'asdfasdf2', title:'第二个新闻', content:'新闻内容2'}, 
        {id:'asdfasdf3', title:'第三个新闻', content:'新闻内容3'}, 
        {id:'asdfasdf4', title:'第四个新闻', content:'新闻内容4'}
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
    /* list-style: none; */
    text-decoration: none;
    color: #64967e;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news li::marker{
    color: #64967e;
}
.news li>a{
    font-size: 18px;
    line-height: 40px;
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