<template>
    <div class="app"></div>
    <Header/>
    <!-- navigation -->
    <div class="navigate">
        <RouterLink to="/home" active-class="active">Home</RouterLink>
        <RouterLink to="/news" active-class="active">News</RouterLink>
        <RouterLink to="/about" active-class="active">About</RouterLink>
    </div>
    <div class="main-content">
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup name="App">
    import {RouterView, RouterLink} from 'vue-router'
    import Header from './components/Header.vue'
</script>

<style>
    .title{
        text-align: center;
        word-spacing: 5px;
        margin: 30px 0 ;
        height: 70px;
        line-height: 70px;
        background-image: linear-gradient(45deg, gray, white);
        border-radius:  10px;
        box-shadow: 0 0 2px;
        font-size: 30px;
    }
    .navigate{
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    }
    .navigate a{
        display: block;
        text-align: center;
        width: 90px;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        background-color: gray;
        text-decoration: none;
        color: white;
        font-size: 18px;
        letter-spacing: 5px;
    }
    .navigate a.active{
        background-color: #64967E;
        color: #ffc268;
        font-weight: 900;
        text-shadow: 0 0 1px black;
        font-family: Arial, Helvetica, sans-serif;
    }
    .main-content{
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 10px;
        width: 90%;
        height: 400px;
        border: 1px solid;
    }
</style>