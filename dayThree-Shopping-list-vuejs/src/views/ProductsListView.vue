<script lang="ts">
import ProductList from '@/components/ProductList.vue'

export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    ProductList
  }
}
</script>

<template>
  <main>
    <ProductList />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
