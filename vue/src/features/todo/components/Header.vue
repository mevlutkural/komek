<script setup lang="ts">
interface Props {
  todoLength: number;
}

const props = defineProps<Props>();
</script>

<template>
  <header class="flex items-center justify-between mb-6">
    <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
      Todo List
    </h1>
    <div class="text-sm">
      Toplam:
      <span class="font-medium">{{ props.todoLength }}</span>
    </div>
  </header>
</template>
