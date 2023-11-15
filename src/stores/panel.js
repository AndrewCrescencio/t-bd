import { ref } from 'vue'
import { defineStore } from 'pinia'

const API_URL = import.meta.env.VITE_API_URL
export const usePanelStore = defineStore('panel', () => {
  const data = ref(null)

  const loading = ref(false)

  async function getData() {
    loading.value = true
    //Eu sei que poderia usar um .env
    const result = await fetch(API_URL)
    data.value = await result.json()
    loading.value = false
  }
  return { loading, getData, data }
})
