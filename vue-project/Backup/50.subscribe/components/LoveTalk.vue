<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import {reactive} from 'vue'
    import axios  from 'axios'
    import {nanoid} from 'nanoid'
    import { useLoveTalkStore } from '@/store/loveTalk'

    const talkStore = useLoveTalkStore()

    async function getLoveTalk() {
        let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(), title:result.data.content }
        talkStore.talkList.unshift(obj)
    }
    
</script>

<style scoped>
.talk{
    background-color: orange;
    padding: 10px; 
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

</style>