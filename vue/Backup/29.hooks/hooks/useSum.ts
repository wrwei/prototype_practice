import {ref, onMounted} from 'vue'
    export default function () {
        let sum = ref(0)
    
        function add() {
            sum.value+=1
        }

        onMounted(()=>{
            sum.value = 100
        })
        return {sum, add}
    }
    
