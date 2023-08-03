<script lang="ts">
import ProductsList from '../components/ProductsList.vue'
import Header from '@/components/Header.vue'
import store from '@/store'

export default {
  data() {
    return {
      isChecked: [] as boolean[]
      // counterValue: 0,
    }
  },
  methods: {
    counter(index: number) {
      this.isChecked[index] = !this.isChecked[index]
      // const counterValue = this.isChecked.filter(isChecked => isChecked).length;
      // localStorage.setItem('countProducts', JSON.stringify(this.counterValue))
      // store.dispatch('initializeState');
      // const counterValue = store.getters.getCounterValue;
      // console.log(store.getters.getCounterValue);
    }
  },
  components: {
    Header,
    ProductsList
  }
}
</script>

<template>
  <Header />
  <main>
    <ProductsList @isChecked="counter" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
