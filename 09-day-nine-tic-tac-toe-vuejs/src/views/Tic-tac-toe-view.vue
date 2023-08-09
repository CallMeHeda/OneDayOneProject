<template>
  <!-- <Header /> -->

  <div class="tictactoe">
    <Gameboard />
  </div>
</template>

<script setup lang="ts">
import Gameboard from '@/components/Gameboard.vue'
import Header from '@/components/Header.vue'
</script>

<style scoped lang="scss">
.tictactoe {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-height: 100%;
  margin-top: 80px;
}
</style>
