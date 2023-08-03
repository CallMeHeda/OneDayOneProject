<script lang="ts">
import ShoppingList from '../components/ShoppingList.vue'
import Header from '@/components/Header.vue'

export default {
  data() {
    return {
      countProducts: 0
    }
  },
  methods: {},
  components: {
    Header,
    ShoppingList
  },
  created() {
    const countProducts = localStorage.getItem('countProducts')
    if (countProducts) {
      this.countProducts = JSON.parse(countProducts)
    }
  }
}
</script>

<template>
  <Header :counterValue="countProducts" />
  <main>
    <ShoppingList />
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
