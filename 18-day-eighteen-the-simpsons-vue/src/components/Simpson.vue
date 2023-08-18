<template>
  <div>
    <p>{{ simpson[0].character }}</p>
    <img :src="simpson[0].image" :alt="simpson[0].character" width="200" height="350" />
    <p>{{ simpson[0].quote }}</p>
  </div>
  <button>
    <img src="../assets/images/donut.png" class="donut" width="30" height="30" />
    <img src="../assets/images/homer.png" class="homer" width="120" height="120" />
    <span class="doh">D'oh!</span>
    <span class="btnWord">Woo</span>
    <span class="btnWord2">Hoo!</span>
  </button>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      simpson: [
        {
          character: '',
          image: '',
          quote: ''
        }
      ]
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes').then((response) => {
        this.simpson = response.data
        console.log(this.simpson)
      })
    }
  }
}
</script>

<style scoped>
button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  overflow: hidden;
  border: 2px solid #d7d5c3;
  border-radius: 50px;
  box-shadow:
    2.9px 2.9px 2.2px rgba(0, 0, 0, 0.019),
    5.2px 5.2px 5.3px rgba(0, 0, 0, 0.023),
    7px 7px 10px rgba(0, 0, 0, 0.025),
    8.7px 8.7px 17.9px rgba(0, 0, 0, 0.024),
    11.3px 11.3px 33.4px rgba(0, 0, 0, 0.023),
    20px 20px 80px rgba(0, 0, 0, 0.02);
  background-color: #ffd820;
}

.homer {
  position: absolute;
  top: -105%;
  left: 42%;
  transition: 0.5s all;
  animation: tilt 1.1s infinite ease-in-out;
}

@keyframes tilt {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  50% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}

.donut {
  position: absolute;
  left: 10%;
  animation: rotate_4991 1s linear infinite;
}

@keyframes rotate_4991 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

button:hover .homer {
  top: 90%;
}

button:hover .donut {
  animation: none;
  transform: scale(0);
}

button:hover .doh {
  color: transparent;
}

.doh {
  position: absolute;
  left: 37%;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 1px;
  color: rgb(44, 41, 41);
}

.btnWord,
.btnWord2 {
  position: absolute;
  font-size: 15px;
  opacity: 0;
  animation: pulse-animation_0011 1s infinite;
}

@keyframes pulse-animation_0011 {
  0% {
    transform: rotateZ(-30deg) scale(1);
  }

  50% {
    transform: rotateZ(-30deg) scale(1.1);
  }

  100% {
    transform: rotateZ(-30deg) scale(1);
  }
}

.btnWord {
  top: 18%;
  left: 58%;
}

.btnWord2 {
  top: 43%;
  left: 61%;
}

button:hover .btnWord,
button:hover .btnWord2 {
  opacity: 1;
}
</style>
