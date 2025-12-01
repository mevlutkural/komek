<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      @click="router.push('/')"
      class="bg-gray-800 px-2 py-1 rounded-lg hover:bg-gray-600 cursor-pointer"
    >
      Home
    </div>
    <div
      @click="router.push('/products')"
      class="bg-gray-800 px-2 py-1 rounded-lg hover:bg-gray-600 cursor-pointer"
    >
      Products
    </div>
  </div>
</template>
