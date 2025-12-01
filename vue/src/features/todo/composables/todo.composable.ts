import { ref } from "vue";

import type { Todo } from "../models/todo.model";

export function useTodo() {
  const todos = ref<Todo[]>([{ id: 1, title: "Test", completed: false }]);

  const todoValue = ref<string>("");

  const addTodo = () => {
    const lastId = todos.value[todoValue.value.length - 1]?.id ?? 0;
    const id = lastId + 1;

    todos.value.push({
      id,
      title: todoValue.value,
      completed: false,
    });

    todoValue.value = "";
  };

  return {
    todos,
    todoValue,
    addTodo,
  };
}
