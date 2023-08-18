<template><div></div></template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      simpson: [{}]
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      this.simpson = response.data
      console.log(this.simpson)
    }
  }
}
</script>

<style scoped></style>
