<script setup lang="ts">
import Header from "../components/Header.vue";
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";

import { useTodo } from "../composables/todo.composable";

const { todos, todoValue, addTodo } = useTodo();
</script>

<template>
  <div
    class="min-h-screen flex items-start justify-center py-12"
  >
    <div
      id="todo-container"
      class="w-full max-w-2xl bg-white/90 dark:bg-gray-900 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-slate-100 dark:border-gray-700 dark:text-white"
    >
      <!-- Header -->
      <Header :todo-length="todos.length" />

      <TodoInput
        :model-value="todoValue"
        :add-todo="addTodo"
        @update:model-value="(value: string) => todoValue = value"
      />

      <TodoList :todos="todos" />
    </div>
  </div>
</template>
