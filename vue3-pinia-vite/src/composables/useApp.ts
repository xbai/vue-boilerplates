import { useMainStore } from "@/stores/main"
//import type { AppData, UserData } from "@/types/AppData"
export const useApp = () => {
  const mainStore = useMainStore()

  const fetchAppData = () => {
    mainStore.updateAppData({
      userInfo: {
        fullName: 'My Friend'
      },
    })
  }
  return {
    fetchAppData,
  }
}