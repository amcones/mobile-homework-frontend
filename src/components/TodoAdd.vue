<template>
  <div id="add-container">
    <div class="check-container">
    </div>
    <div class="info-container">
      <el-input v-model="todoContent" clearable placeholder="添加任务" size="large"
                @keyup.enter="emitAddTodo"></el-input>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "TodoAdd",
  props: ["tid"],
  setup(props, context) {
    return useEmitAddTodo(props.tid, context.emit);
  },
};

function useEmitAddTodo(tid, emit) {
  const todoContent = ref("")
  const emitAddTodo = () => {
    axios.post("http://localhost:8080/addTodo", {
      user_id: window.uid,
      todo_content: todoContent.value,
      todo_completed: false
    }).then(res => {
      const todo = {
        id: res.data.data.todoId,
        content: res.data.data.todoContent,
        completed: false,
      }
      emit("add-todo", todo)
    })

    todoContent.value = ""
  }
  return {
    todoContent,
    emitAddTodo,
  }
}
</script>

<style scoped>
* {
  font-size: 16px;
}

#add-container {
  background: var(--v_bg2);
  width: 100%;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 4px 12px 4px 4px;
  margin: 8px 0;
}

.check-container {
  width: 56px;
  height: 56px;
  position: relative;
  color: var(--v_primary);
}

.check-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 30%;
  transform: translate(-50%, -50%);
  border-top: 2px solid;
}

.check-container::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  height: 30%;
  transform: translate(-50%, -50%);
  border-left: 2px solid;
}

.info-container {
  flex-grow: 1;
}

>>> .el-input__wrapper {
  background: none;
  box-shadow: none;
}

>>> .el-input__wrapper:hover {
  background: none;
  box-shadow: none;
}
</style>