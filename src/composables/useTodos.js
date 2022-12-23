import {onMounted, ref} from "vue";
import axios from "axios";

export default function useTodos() {
    const todos = ref([]);

    // 添加 todo
    const addTodo = (todo) => todos.value.push(todo);

    // 获取远程 todos
    const fetchTodos = async () => {
        await axios.get("http://123.60.135.201:8080/getTodo", {params: {userId: window.uid}})
            .then(async (successResponse) => {
                if (successResponse.data.code === 200) {
                    const rawTodos = await successResponse.data.data;
                    todos.value = rawTodos.map((todo) => ({
                        id: todo.todoId,
                        content: todo.todoContent,
                        completed: todo.todoCompleted,
                    }));
                } else {
                    alert(successResponse.data.message)
                }
            })
            .catch(failResponse => {
                alert("获取失败" + failResponse)
            })
    };

    onMounted(() => {
        fetchTodos();
    });

    return {
        todos,
        addTodo,
    };
}
