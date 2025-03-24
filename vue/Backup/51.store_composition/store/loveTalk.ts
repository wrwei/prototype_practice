import {defineStore} from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
import {reactive} from 'vue'

export const useLoveTalkStore = defineStore('loveTalk', ()=>{
    
    

    let talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [])
    
    async function getATalk(){
        let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(), title:result.data.content }
        talkList.unshift(obj)
    }

    return {talkList, getATalk}
})

// export const useLoveTalkStore = defineStore('loveTalk', {
//     actions:{
//         async getATalk(){
//         let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//         let obj = {id:nanoid(), title:result.data.content }
//         this.talkList.unshift(obj)
//         }
//     },
//     state() {
//         return {
//             talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
//         }
//     }
// })
