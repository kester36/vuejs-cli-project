<template>
    <ul>
        <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
</template>

<script>
    export default {
        // name: "TodoList",
        props: ['todos']
    }
</script>

<style scoped>

</style>
