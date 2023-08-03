<template>
  <div class="containerInput">
    <div class="inputBox">
      <v-text-field
        class="custom-input"
        color="teal-lighten-2"
        v-model="searchQuery"
        label="Search"
        required
      ></v-text-field>
      <v-btn
        :disabled="loading"
        :loading="loading"
        class=""
        color="teal-lighten-2"
        size="x-large"
        v-if="searchQuery != ''"
        @click="searchProduct"
      >
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" />
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      searchQuery: '',
      loading: false,
      products: [{}]
    }
  },
  methods: {
    async searchProduct() {
      this.loading = true
      const apiKey = import.meta.env.VITE_API_KEY

      setTimeout(async () => {
        const options = {
          method: 'GET',
          url: `https://store-groceries.p.rapidapi.com/groceries/search/${this.searchQuery}`,
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'store-groceries.p.rapidapi.com'
          }
        }
        try {
          const response = await axios.request(options)
          const responseData = response.data
          if (Array.isArray(responseData)) {
            this.products = this.filterProducts(responseData)
            console.log(this.products)
          } else {
            this.products = [responseData]
            console.log(this.products, ' 2')
          }
          this.$emit('productToSearch', responseData)
          this.loading = false
          console.log(this.products)
        } catch (error) {
          console.error(error)
          this.loading = false
        }
      }, 2000)
    },

    filterProducts(responseData: any[]): any[] {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        return responseData.filter((product: any) => product.name.toLowerCase().includes(query))
      } else {
        return responseData
      }
    }
  }
})
</script>

<style scoped lang="scss">
.containerInput {
  display: flex;
  justify-content: center;

  .inputBox {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 50%;

    .custom-input :deep(.v-field) {
      background-color: #f0f0f0;
      margin-right: 10px;
      height: 55px;
    }

    .v-btn {
      border-radius: 4px 4px 0 0;
      height: 55px;
      color: #f0f0f0;
    }
  }
}
</style>
