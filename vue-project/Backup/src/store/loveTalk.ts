import {defineStore} from 'pinia'

export const useLoveTalkStore = defineStore('loveTalk', {
    state() {
        return {
            talkList: [   
                {id:'asdfqwer1', title:'今天你有点怪，哪里怪，怪好看的'},
                {id:'asdfqwer2', title:'今天去输液了，输的什么液，想你的夜'},
                {id:'asdfqwer3', title:'心里给你留了一块地，我的死心塌地'},
            ]
        }
    }
})
