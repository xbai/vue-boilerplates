import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserData, AppData } from '@/types/AppData'

export const useMainStore = defineStore('main', () => {
  const appData = ref({} as AppData)
  
  const userInfo = computed<UserData>(() => appData.value.userInfo)

  const updateAppData = (data: any) => {
    appData.value = data
  }

  return { appData, userInfo, updateAppData }
})
