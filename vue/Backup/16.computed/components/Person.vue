<template>
    <div class="person">
        First Name: <input type="text" v-model="firstname"> <br>
        Surname:    <input type="text" v-model="lastname"> <br>
        Full Name: <span>{{ fullName }}</span> <br>
    </div>
</template>

<script setup lang="ts" name="Person">
    import { ref, computed} from 'vue';

    let firstname = ref('Will')
    let lastname = ref('Turner')

    let fullName = computed(()=>{
        return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value
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