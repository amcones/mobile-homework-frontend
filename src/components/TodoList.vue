<template>
  <el-scrollbar>
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo-item="todo" @change-state="
      todo.completed = $event.target.checked;
      changeState(todo)
"/>
  </el-scrollbar>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
import axios from "axios";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  props: ["todos"],
  methods: {
    changeState(todo) {
      axios.patch('http://123.60.135.201:8080/updateTodo', {
        todo_id: todo.id,
        user_id: window.uid,
        todo_content: todo.content,
        todo_completed: todo.completed
      }).then(res => {
            console.log(res)
          }
      )
    }
  }
}
</script>

<style scoped>
</style>