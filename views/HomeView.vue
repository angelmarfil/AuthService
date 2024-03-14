<script setup lang="ts">
import UserService from '@/services/UserService'
import type { IUser } from '@/interfaces/IUser'
import { onMounted, type Ref } from 'vue'

const service = new UserService()

const users: Ref<IUser[]> = service.getUsers()

onMounted(async () => {
  await service.fetchAll()
})
</script>

<template>
  <h1 class="text-4xl font-bold">Usuarios</h1>
  <ul class="flex flex-wrap w-full gap-3 justify-center mt-6">
    <li v-for="(user, index) in users" :key="index">
      <RouterLink :to="{ name: 'user', query: { email: user.email } }">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="avatar placeholder m-auto">
            <div class="bg-neutral text-neutral-content rounded-full w-24">
              <span class="text-3xl">{{ user.name.slice(0, 1) }}</span>
            </div>
          </div>
          <div class="card-body items-center">
            <h2 class="card-title">{{ user.name }}</h2>
            <p>{{ user.email }}</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>
