import { defineStore } from 'pinia'

export const store = defineStore({
  id: 'main',
  state: () => ({
    name: 'tom'
  }),
  // getters
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    }
  }
})