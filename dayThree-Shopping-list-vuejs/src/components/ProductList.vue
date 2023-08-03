<template>
  <SearchProduct @productToSearch="handleProductSearch" />
</template>

<script lang="ts">
import SearchProduct from './SearchProduct.vue'

export default {
  emits: ['productsSelected', 'isChecked'],

  data() {
    return {
      searchQuery: '',
      products: [
        {
          code: Number,
          categories: [],
          name: '',
          images: [
            {
              url: ''
            }
          ],
          message: ''
        }
      ],
      loading: false,
      counterValue: 0,
      productsSelected: [
        {
          code: Number,
          categories: [],
          name: '',
          images: [
            {
              url: ''
            }
          ],
          message: ''
        }
      ],
      isChecked: []
    }
  },
  components: {
    SearchProduct
  },
  methods: {
    handleProductSearch(products: []) {
      this.products = products
    }
  }
}
</script>

<style scoped lang="scss"></style>
