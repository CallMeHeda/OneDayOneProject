<template>
  <div class="flex flex-col justify-center items-center">
    <div class="book">
      <blockquote class="blockquote flex flex-col m-12">
        <q class="text-center">{{ simpson[0].quote }}</q>
        <footer class="flex justify-end mt-3">
          <cite>- {{ simpson[0].character }}</cite>
        </footer>
      </blockquote>
      <div class="cover">
        <img :src="simpson[0].image" :alt="simpson[0].character" width="200" height="350" />
        <p class="text-xl">{{ simpson[0].character }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['simpson']
}
</script>

<style scoped>
.book {
  @apply relative flex items-center justify-center w-96 h-[545px] text-black bg-slate-200 rounded-xl shadow-xl;
  transform: preserve-3d;
  perspective: 2000px;
}

.cover {
  @apply absolute top-0 flex flex-col items-center justify-center gap-7 w-full h-full cursor-pointer rounded-xl bg-slate-300 shadow-black shadow-lg;
  transition: all 0.5s;
  transform-origin: 0;
}

.book:hover .cover {
  transition: all 0.5s;
  transform: rotateY(-80deg);
}
</style>
