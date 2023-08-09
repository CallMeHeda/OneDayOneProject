<template>
  <div class="tictactoe">
    <Gameboard />
  </div>
</template>

<script setup lang="ts">
import Gameboard from '@/components/Gameboard.vue'
</script>

<style scoped lang="scss">
.tictactoe {
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  // border: 1px solid red;
}
</style>
