<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句图为情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import {reactive} from 'vue'
    import axios  from 'axios'
    import {nanoid} from 'nanoid'

    let talkList = reactive([
        {id:'asdfqwer1', title:'今天你有点怪，哪里怪，怪好看的'},
        {id:'asdfqwer2', title:'今天去输液了，输的什么液，想你的夜'},
        {id:'asdfqwer3', title:'心里给你留了一块地，我的死心塌地'},
    ])

    async function getLoveTalk() {
        let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(), title:result.data.content }
        talkList.unshift(obj)
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