import { defineStore } from 'pinia'

const store = defineStore({
  id: 'main',
  state: () => ({
    name: 'tom'
  }),
  // getters
  getters: {
    nameLength: (state: { name: string }) => state.name.length
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      ;(this as any).name = data
    }
  }
})

export default store
