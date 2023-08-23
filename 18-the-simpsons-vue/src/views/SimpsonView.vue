<template>
  <div
    class="flex flex-col flex-wrap justify-center items-center w-screen h-screen"
    v-if="!isLoading"
  >
    <Card :simpson="simpson" />
    <Button :fetch-data="fetchData" />
  </div>
  <div v-if="isLoading" class="flex flex-wrap justify-center items-center w-screen h-screen">
    <img src="../assets/images/loader/loader.gif" alt="Loading" />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Card from '../components/Card.vue'
import Button from '../components/Button.vue'

export default {
  data() {
    return {
      simpson: [
        {
          character: '',
          image: '',
          quote: ''
        }
      ],
      isLoading: true
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.isLoading = true
      setTimeout(async () => {
        try {
          await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes').then((response) => {
            this.simpson = response.data
            this.isLoading = false
          })
        } catch (error) {
          console.error(error)
          this.isLoading = false
        }
      }, 3000)
    }
  },
  components: {
    Card,
    Button
  }
}
</script>

<style scoped></style>
