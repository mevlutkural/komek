<script setup lang="ts">
interface Props {
  modelValue: string;
  addTodo: () => void;
}

interface Emits {
  (e: "update:modelValue", value: string): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();
</script>

<template>
  <div class="mb-6">
    <input
      type="text"
      placeholder="Yeni eleman ekle..."
      :value="props.modelValue"
      @input="(e) => emit('update:modelValue', (e.target as any).value)"
      @keypress.enter="addTodo"
      class="w-full px-4 py-3 rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 transition caret-sky-600"
    />
  </div>
</template>
