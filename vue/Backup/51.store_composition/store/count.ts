import {defineStore} from 'pinia'

export const useCountStore = defineStore('count', {
    actions: {
        increment(value:number) {
            if(this.sum<10) {
                this.sum += value
            }
        }
    },
    state(){
        return {
            sum:6,
            school: 'LU',
            address: 'Lancaster'
        }
    },
    getters: {
        bigSum(state) {
            return state.sum*10
        },
        upperSchool(state) {
            return state.school.toUpperCase()
        }
    }
})
