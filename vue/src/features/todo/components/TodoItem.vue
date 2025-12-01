<script setup lang="ts">
import type { Todo } from "../models/todo.model";

interface Props {
  todo: Todo;
}

defineProps<Props>();
</script>

<template>
  <li
    class="flex items-center justify-between gap-4 bg-white dark:bg-gray-800 dark:text-white rounded-xl p-3 border border-slate-100 shadow-sm hover:shadow-md transition"
  >
    <div class="flex items-center gap-3">
      <div
        class="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white font-semibold"
      >
        {{ todo.id }}
      </div>
      <div>
        <div class="font-medium">{{ todo.title }}</div>
        <div class="text-xs text-slate-400">
          completed: {{ todo.completed }}
        </div>
      </div>
    </div>

    <div class="text-xs hidden sm:block">#{{ todo.id }}</div>
  </li>
</template>
