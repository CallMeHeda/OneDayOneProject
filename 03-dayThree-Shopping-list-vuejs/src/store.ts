import { createStore, Commit } from 'vuex'

interface Product {
  code: number
  categories: any[]
  name: string
  images: { url: string }[]
  message: string
}

interface State {
  productsSelected: Product[]
  counterValue: 0
}

const store = createStore<State>({
  state: {
    productsSelected: [],
    counterValue: 0
  },
  getters: {
    getProductsSelected(state: { productsSelected: Product[] }) {
      return state.productsSelected
    },
    getCounterValue(state: { counterValue: 0 }) {
      return state.counterValue
    }
  },
  mutations: {
    addProduct(state: { productsSelected: Product[] }, product: Product) {
      state.productsSelected.push(product)
    },
    setProductsSelected(state: { productsSelected: Product[] }, products: Product[]) {
      state.productsSelected = products
    },
    removeProduct(state: State, product: Product) {
      const index = state.productsSelected.findIndex((p) => p.code === product.code)
      if (index !== -1) {
        state.productsSelected.splice(index, 1)
        localStorage.setItem('productsSelected', JSON.stringify(state.productsSelected))
      }
    },
    // CounterValue
    addCounter(state: { counterValue: 0 }, counterValue: 0) {
      state.counterValue = counterValue
    },
    setCounterValue(state: { counterValue: 0 }, counterValue: 0) {
      state.counterValue = counterValue
    }
  },
  actions: {
    addProduct({ commit }: { commit: Commit }, product: Product) {
      commit('addProduct', product)
    },
    initializeState({ commit }: { commit: Commit }) {
      const savedProductsSelected = localStorage.getItem('productsSelected')
      const savedCounterValue = localStorage.getItem('counterValue')
      if (savedProductsSelected && savedCounterValue) {
        commit('setProductsSelected', JSON.parse(savedProductsSelected))
        commit('setCounterValue', JSON.parse(savedCounterValue))
      }
    },
    addCounter({ commit }: { commit: Commit }, counterValue: 0) {
      commit('addCounter', counterValue)
    }
  }
})

store.subscribe((mutation: any, state: { productsSelected: Product[]; counterValue: 0 }) => {
  if (mutation.type === 'addProduct') {
    localStorage.setItem('productsSelected', JSON.stringify(state.productsSelected))
  }

  if (mutation.type === 'addCounter') {
    localStorage.setItem('counterValue', JSON.stringify(state.counterValue))
  }
})

export default store
