<template>
    <div class="person">
        <h2>name: {{name}}</h2>
        <h2>age: {{age}}</h2>
        <button @click="changeName">Edit Name</button>
        <button @click="changeAge">Edit Age</button>
        <button @click="showTel">check contact</button>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Person',
        data() {
            return {
                name:'Dave',
                age:18,
                tel:'1388686111'
            }
        },
        methods:{
            showTel(){
                alert(this.tel)
            },
            changeName() {
                this.name="David"
            },
            changeAge() {
                this.age=20
            }
        }
    }
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
</style>