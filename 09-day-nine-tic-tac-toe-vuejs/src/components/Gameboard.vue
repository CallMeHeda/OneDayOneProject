<template>
  <div class="gameboard">
    <template v-for="(cell, index) of cells" :key="cell.id">
      <Square :turn-to="turnTo" :cell="cell" @update-turn="updateTurn" />
    </template>
  </div>
</template>

<script lang="ts">
import Square from '@/components/Square.vue'

export default {
  data() {
    return {
      cells: ['', '', '', '', '', '', '', '', ''],
      turnTo: `circle`
    }
  },
  methods: {
    updateTurn(newTurn: string) {
      this.turnTo = newTurn
      console.log(this.turnTo)
    }
  },
  components: {
    Square
  }
}
</script>

<style lang="css">
.gameboard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid whitesmoke;
  width: 600px;
  height: 600px;
}
</style>
