<script setup lang="ts">
import TodoView from "./features/todo/views/TodoView.vue";
import { useDarkMode } from "./shared/composables/dark-mode.composable";

const { isDark, toggleDarkMode } = useDarkMode();
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 transition-colors duration-1000" :class="{ dark: isDark }">
    <div>isDark: {{ isDark }}</div>

    <button
      class="bg-sky-500 px-2.5 py-2 rounded-lg text-white"
      @click="toggleDarkMode"
    >
      Toggle Dark Mode
    </button>

    <TodoView />
  </div>
</template>
