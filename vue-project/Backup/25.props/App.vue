<template>

    <Person :list="personList"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {reactive} from 'vue'
    import {type Persons} from "@/types"

    let personList = reactive<Persons>([
        {id:'asdfsafds1', name:'Dave', age: 18},
        {id:'asdfsafds2', name:'Will', age: 18},
        {id:'asdfsafds3', name:'Kosta', age: 18}
    ])
</script>

<style>
    .app{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>