<template>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <div>
      <img
        ref="coverSong"
        :src="currentSong.album.cover_medium"
        alt="cover song"
        class="rounded-2xl"
      />
    </div>
    <div class="flex flex-col items-center w-screen mt-3.5">
      <div>
        <p ref="titleSong" class="text-lg text-center text-slate-300 font-semibold">
          {{ currentSong.title }}
        </p>
      </div>
      <div>
        <p ref="artistName" class="text-gray-400 font-semibold">{{ currentSong.artist.name }}</p>
      </div>
    </div>

    <div class="flex flex-col justify-center w-screen">
      <audio ref="audioPlayer" :src="currentSong.preview">
        <!-- ❓❓❓🤷🏿‍♀️ <source :src="currentSong.preview" type="audio/mpeg"> NE FONCTIONNE PAS ❓❓❓🤷🏿‍♀️ -->
        <source type="audio/mpeg" />
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
      <div id="progressBar" class="flex justify-center mt-3.5 w-screen">
        <input
          type="range"
          name="progressBar"
          id="progressBar"
          min="0"
          value="0"
          ref="progressBar"
          class="w-10/12"
        />
      </div>
      <div class="flex justify-between w-screen mt-1">
        <span ref="currentTime" class="text-xs text-gray-400 ml-8">{{ currentTime }}</span>
        <span ref="totalTime" class="text-xs text-gray-400 mr-8">{{ duration }}</span>
      </div>
    </div>

    <div class="flex justify-center w-screen text-center mt-12">
      <p class="text-gray-400">Next : <span ref="nextTitle" class="text-green-500"></span></p>
    </div>

    <div class="flex justify-around w-72 mt-12">
      <div id="btnPrev">
        <button ref="btnPrev">
          <font-awesome-icon icon="fa-solid fa-backward-step" size="2xl" class="text-slate-300" />
        </button>
      </div>
      <div id="btnPlay">
        <button ref="btnPlay">
          <font-awesome-icon icon="fa-solid fa-circle-play" size="2xl" class="text-slate-300" />
        </button>
      </div>
      <div id="btnNext">
        <button ref="btnNext">
          <font-awesome-icon icon="fa-solid fa-forward-step" size="2xl" class="text-slate-300" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      query: '',
      currentSongIndex: 0,
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
      ],
      currentSong: {
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
      },
      currentTime: '',
      duration: ''
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
        return responseData
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    haveSongs() {
      const audioPlayer = this.$refs.audioPlayer as HTMLAudioElement
      const btnPlay = this.$refs.btnPlay as HTMLButtonElement
      const btnPrev = this.$refs.btnPrev as HTMLButtonElement
      const btnNext = this.$refs.btnNext as HTMLButtonElement
      const progressBar = this.$refs.progressBar as HTMLInputElement
      const nextTitle = this.$refs.nextTitle as HTMLSpanElement

      this.fetchSongs()
        .then(() => {
          audioPlayer.addEventListener('timeupdate', () => {
            const currentTime = audioPlayer.currentTime
            const duration = audioPlayer.duration
            const progress = (currentTime / duration) * 100

            progressBar.value = progress.toString()
            if (duration - currentTime <= 5) {
              goNext()
            }
          })

          const goNext = () => {
            this.currentSongIndex++
            if (this.currentSongIndex >= this.songs.length) {
              this.currentSongIndex = 0
            }
            updatePlayer()
          }

          const updatePlayer = () => {
            this.currentSong = this.songs[this.currentSongIndex]
            console.log(this.currentSong)

            const nextSongIndex = (this.currentSongIndex + 1) % this.songs.length
            nextTitle.textContent = `${this.songs[nextSongIndex].title} (${this.songs[nextSongIndex].artist.name})`
          }

          const togglePlayPause = () => {
            if (audioPlayer.paused) {
              audioPlayer.play()
              btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class='text-3xl fill-slate-300'>
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>
                </svg>`
            } else if (!audioPlayer.paused) {
              audioPlayer.pause()
              btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class='text-3xl fill-slate-300'>
                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>
                </svg>`
            }
          }

          const playingNextSong = () => {
            this.currentSongIndex++
            if (this.currentSongIndex >= this.songs.length) {
              this.currentSongIndex = 0
            }
            updatePlayer()
            progressBar.value = progressBar.min
            audioPlayer.currentTime = 0
            audioPlayer.play()
            btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class='text-3xl fill-slate-300'>
                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>
                </svg>`
          }

          const prevSong = () => {
            this.currentSongIndex--
            if (this.currentSongIndex < 0) {
              console.log('index ', this.currentSongIndex)
              this.currentSongIndex = this.songs.length - 1
            }
            updatePlayer()
            progressBar.value = progressBar.min
            audioPlayer.currentTime = 0
            audioPlayer.play()
            btnPlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class='text-3xl fill-slate-300'>
                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>
                </svg>`
          }

          btnPlay.addEventListener('click', togglePlayPause)
          btnNext.addEventListener('click', playingNextSong)
          btnPrev.addEventListener('click', prevSong)

          const formattedCurrentTime = () => {
            if (audioPlayer) {
              this.currentTime = this.formatTime(audioPlayer.currentTime)
              this.duration = this.formatTime(audioPlayer.duration)
            }
            return '00:00'
          }

          audioPlayer.addEventListener('loadedmetadata', formattedCurrentTime)
          audioPlayer.addEventListener('timeupdate', formattedCurrentTime)

          updatePlayer()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    formatTime(time: number) {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }
  },
  mounted() {
    this.haveSongs()
  }
}
</script>
