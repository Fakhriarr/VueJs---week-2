import { defineStore } from "pinia"
import {  ref } from "vue"

export const useAuthStore = defineStore('auth', () => {
  const username = ref('')

  const login = (name: string) => {
    username.value =  name
  };

  const logout = (name: string) => {
    username.value =  ''
  };
    return { username, login, logout }
  });