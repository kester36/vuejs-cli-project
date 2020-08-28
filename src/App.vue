<template>
  <div id="app">
    <TodoList :todos="todos" @delete-todo="deleteTodo"/>
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
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index,1);
    }
  }
}
</script>
