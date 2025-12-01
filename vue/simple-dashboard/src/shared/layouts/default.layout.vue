<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';

</script>

<template>
  <div class="flex flex-col bg-gray-900 h-screen text-white">
    <div class="py-2 px-1.5 border-b border-gray-700">Header</div>
    <div class="flex h-full">
      <div class="w-3/12 border-e border-gray-700 p-1">
        <Sidebar />
      </div>
      <div class="w-full p-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
