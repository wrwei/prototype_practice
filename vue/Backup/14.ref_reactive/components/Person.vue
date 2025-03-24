<template>
    <div class="car">
        <h2>a {{car.brand}}, worth {{ car.price }} thousand pounds</h2>
        <button @click="changePrice">change price</button>
        <br>
        <h2>game list</h2>
        <ul>
            <li v-for="g in games" :key="g.id">Game: {{ g.name }}</li>
        </ul>
        <button @click="changeFirstGame">change first game name</button>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Person',
        
    }
</script>

<script setup lang="ts">
    import { ref } from 'vue';

    let car = ref({brand:'porsche', price:100})
    let games = ref([
        {id:'111', name:'pubg'},
        {id:'222', name:'cs2'},
        {id:'333', name:'jinyong'}
    ])
    
    function changePrice() {
        car.value.price+=10
    }

    function changeFirstGame() {
        games.value[0].name='Player Unknown Battle Ground'
    }
</script>

<style scoped>
    .car{
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