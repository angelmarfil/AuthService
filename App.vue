<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent></HeaderComponent>

  <main class="grid place-items-center h-[60vh] w-full">
    <RouterView />
  </main>
</template>

<style scoped></style>
