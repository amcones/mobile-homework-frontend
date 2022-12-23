<template>
  <h1>U-Todo</h1>
  <p>{{ dateTime }}</p>
  <div id="list-container">
    <TodoList :todos="todos"/>
  </div>
  <TodoAdd :tid="todos.length" @add-todo="addTodo"/>
</template>

<script>
import useTodos from "@/composables/useTodos";
import TodoAdd from "@/components/TodoAdd";
import TodoList from "@/components/TodoList";

export default {
  name: "TodoAppPage",
  components: {
    TodoList,
    TodoAdd,
  },
  setup() {
    const {todos, addTodo} = useTodos()
    return {
      todos,
      addTodo
    }
  },
  data() {
    return {
      dateTime: new Date().toDateString(),
    }
  }
}
</script>

<style scoped>
#list-container {
  flex-grow: 1;
  overflow: hidden;
}
</style>