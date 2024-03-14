import type { ILogin } from '@/interfaces/ILogin'
import type { IRegister } from '@/interfaces/IRegister'
import type { IUser } from '@/interfaces/IUser'
import { ref, type Ref } from 'vue'

const endpoint: string = import.meta.env.VITE_API_URL

export default class UserService {
  private users: Ref<IUser[]>
  private user: Ref<IUser>

  constructor() {
    this.users = ref([])
    this.user = ref({}) as Ref<IUser>
  }

  getUsers(): Ref<IUser[]> {
    return this.users
  }
  getUser(): Ref<IUser> {
    return this.user
  }

  async fetchAll(): Promise<void> {
    try {
      const json = await fetch(endpoint + '/users', {
        headers: {
          'ngrok-skip-browser-warning': '0'
        }
      })
      const response = await json.json()
      this.users.value = await response
    } catch (error) {
      console.log(error)
    }
  }

  async fetchUser(email: string): Promise<void> {
    try {
      const json = await fetch(endpoint + `/user?email=${email}`, {
        headers: {
          'ngrok-skip-browser-warning': '0'
        }
      })
      const response = await json.json()
      this.user.value = await response
    } catch (error) {
      console.log(error)
    }
  }

  async register(user: IRegister): Promise<void> {
    try {
      const response = await fetch(endpoint + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '0'
        },
        body: JSON.stringify(user)
      })
      return response.json()
    } catch (error) {
      console.log(error)
    }
  }

  async login(user: ILogin): Promise<void> {
    try {
      const response = await fetch(endpoint + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '0'
        },
        body: JSON.stringify(user)
      })
      return response.json()
    } catch (error) {
      console.log(error)
    }
  }
}
