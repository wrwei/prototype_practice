import {defineStore} from 'pinia'

export const useCountStore = defineStore('count', {
    //action functions
    actions:{
        increment(value:any){
            this.sum += value
        }
    },
    state(){
        return {
            sum:6,
            name:'LU',
            address:'Lancaster'
        }
    }
})
