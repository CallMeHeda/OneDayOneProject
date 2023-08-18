<template>
  <button @click="fetchData">
    <img src="../assets/images/btn/donut.png" class="donut" width="30" height="30" />
    <img src="../assets/images/btn/homer.png" class="homer" width="120" height="120" />
    <span class="doh">D'oh!</span>
    <span class="btnWord">Woo</span>
    <span class="btnWord2">Hoo!</span>
  </button>
</template>

<script lang="ts">
export default {
  props: ['fetchData']
}
</script>

<style scoped>
button {
  @apply relative flex justify-center items-center w-40 h-16 overflow-hidden
  shadow-lg shadow-gray-900/60
  rounded-full bg-yellow-400 mt-11;
}

.homer {
  @apply absolute top-[-105%] left-[42%] transition-all duration-500 animate-tilt;
}

.donut {
  @apply absolute left-[10%];
}

button:hover .homer {
  @apply top-[90%];
}

button:hover .donut {
  @apply animate-none scale-0;
}

button:hover .doh {
  @apply text-transparent;
}

.doh {
  @apply absolute left-[37%] text-3xl font-bold text-gray-900 font-cursive;
}

.btnWord,
.btnWord2 {
  @apply absolute text-sm font-cursive font-semibold opacity-0 animate-rotateWords;
}

.btnWord {
  @apply top-[18%] left-[58%];
}

.btnWord2 {
  @apply top-[43%] left-[61%];
}

button:hover .btnWord,
button:hover .btnWord2 {
  @apply opacity-100;
}
</style>
