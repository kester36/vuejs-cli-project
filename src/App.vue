<template>
  <div id="app">
    <TodoList :todos="todos" />
  </div>
</template>

<script>

  import TodoList from "./components/TodoList";

export default {
  name: 'App',
  components: {TodoList},
  data() {
    return {
      todos: ['Renovation', 'Buy products', 'Learn VueJS']
    }
  },
  comments: {
    TodoList
  }
}
</script>

<style>

</style>
