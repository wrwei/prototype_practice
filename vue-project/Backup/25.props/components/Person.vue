<template>
    <div class="person">
        <ul>
            <li v-for="l in list" :key="l.id">Name: {{ l.name }}, Age: {{ l.age }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="Person">
    import {defineProps, withDefaults} from 'vue'
    import {type Persons} from '@/types';

    // defineProps(['list'])

    //receive + type checking
    // defineProps<{list:Persons}>()

    //optional list with ?, vue will not process this
    withDefaults(defineProps<{list?:Persons}>(), {
        list: ()=> [{id:'asdfasdf', name: 'Kang', age: 10}]
    })
</script>

<style scoped>
    .person{
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