<script setup lang="ts">
import type { ILogin } from '@/interfaces/ILogin'
import router from '@/router'
import UserService from '@/services/UserService'
import { ref, type Ref } from 'vue'

const service = new UserService()

const login: Ref<ILogin> = ref({
  email: '',
  password: ''
})

const submit = async () => {
  await service.login(login.value)
  router.push({ name: 'home' })
}
</script>
<template>
  <h1 class="text-4xl font-bold text-center">Login</h1>
  <form
    @submit.prevent="submit"
    class="w-96 h-[40vh] m-auto flex flex-col justify-evenly items-center card bg-base-100 shadow-xl"
  >
    <label class="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-4 h-4 opacity-70"
      >
        <path
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
        />
        <path
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
        />
      </svg>
      <input type="text" class="grow" placeholder="Email" v-model.trim="login.email" />
    </label>
    <label class="input input-bordered flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-4 h-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clip-rule="evenodd"
        />
      </svg>
      <input type="password" class="grow" placeholder="Contraseña" v-model.trim="login.password" />
    </label>
    <input type="submit" value="Iniciar Sesión" class="btn btn-primary" />
  </form>
</template>
<style scoped></style>
