<script setup lang="ts">
import UserService from '@/services/UserService'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const service = new UserService()
const user = service.getUser()

const param: string = route.query.email?.toString() || ''

onMounted(async () => {
  await service.fetchUser(param)
})
</script>
<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="avatar placeholder m-auto">
      <div class="bg-neutral text-neutral-content rounded-full w-24">
        <span class="text-3xl">D</span>
      </div>
    </div>
    <div class="card-body items-center">
      <h2 class="card-title">{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <div class="card-actions justify-end"></div>
    </div>
  </div>
</template>
<style scoped></style>
