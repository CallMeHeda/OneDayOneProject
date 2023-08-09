<template>
  <div class="gameBoard">
    <template v-for="(cell, index) of cells" :key="cell.id">
      <Square @click="handleClick" />
    </template>
  </div>
</template>

<script lang="ts">
import Square from '@/components/Square.vue'

export default {
  data() {
    return {
      cells: ['', '', '', '', '', '', '', '', '']
    }
  },
  methods: {
    handleClick(e: MouseEvent) {
      console.log(e.target)
    }
  },
  components: {
    Square
  }
}
</script>

<style lang="css">
.gameBoard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid whitesmoke;
  width: 600px;
  height: 600px;
}
</style>
