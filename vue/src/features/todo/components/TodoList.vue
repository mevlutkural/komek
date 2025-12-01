<script setup lang="ts">
import type { Todo } from "../models/todo.model";
import TodoItem from "./TodoItem.vue";

interface Props {
  todos: Todo[];
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <ul class="space-y-3">
      <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </ul>
  </div>
</template>
