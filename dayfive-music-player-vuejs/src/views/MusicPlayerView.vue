<template>
  <Header />
  <MusicPlayer />
  <Footer />
</template>

<script lang="ts">
import MusicPlayer from '@/components/MusicPlayer.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {}
  },
  components: {
    MusicPlayer,
    Header,
    Footer
  }
}
</script>
