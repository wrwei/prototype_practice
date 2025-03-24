<template>
    <div class="person">
        <h2>Current sum:{{ sum }} </h2>
        <button @click="add">Sum+1</button>
    </div>
</template>

<script>
    export default {
        name: 'Person',
        data() {
            return {
                sum: 0
            }
        },
        methods: {
            add() {
                this.sum += 1
            }
        },
        beforeCreate() {
            console.log('Before creation')
        },

        created() {
            console.log('Person created')
        },

        beforeMount() {
            console.log('Person component to be mounted')
        },

        mounted() {
            console.log('Person component mounted')
        },

        beforeUpdate() {
            console.log('Person component before update')
        },

        updated() {
            console.log('Person component updated')
        },

        beforeDestroy() {
            console.log('Person component to be destroyed')
        },

        destroyed() {
            console.log('Person component destroyed')
        }
}
</script>

<style scoped>
.person{
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>