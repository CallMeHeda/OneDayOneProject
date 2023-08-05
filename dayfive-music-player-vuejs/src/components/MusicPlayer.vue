<template>
  <div></div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      songs: [
        {
          album: {
            cover_medium: ''
          },
          title: '',
          duration: Number,
          artist: {
            name: ''
          },
          link: '',
          preview: ''
        }
      ]
    }
  },
  computed: {},
  methods: {
    async fetchSongs() {
      const APIKEY = import.meta.env.VITE_API_KEY

      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/53362031',
        headers: {
          'X-RapidAPI-Key': APIKEY,
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      }

      try {
        const response = await axios.request(options)
        const responseData = response.data.tracks.data
        this.songs = responseData
        console.log(this.songs)
        return responseData
      } catch (error) {
        console.error(error)
        throw error
      }
    }
  },
  mounted() {
    this.fetchSongs()
  }
}
</script>
