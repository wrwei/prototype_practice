<template>
    <div class="person">
        <h2>Current sum is: {{ sum }}</h2>
        <button @click="add">Sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index"> <br>
        <button @click="getDog">Another Doggy</button>
    </div>
</template>

<script lang="ts" setup>
    import useSum from "@/hooks/useSum"
    import useDog from "@/hooks/useDog"

    const {sum, add} =useSum()
    const {dogList, getDog} =useDog()
</script>

<style scoped>
.person{
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
img{
    height:200px;
    margin-right: 10px;
}
</style>