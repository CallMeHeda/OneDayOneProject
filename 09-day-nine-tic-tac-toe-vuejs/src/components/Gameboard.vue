<template>
  <div class="gameboard">
    <template v-for="(cell, index) of cells" :key="cell.id">
      <Square
        :id="index"
        :turn-to="turnTo"
        :cells="cells"
        :cell="cell"
        @update-turn="updateTurn"
        @onChangeCells="onChangeCells"
      />
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
    },
    onChangeCells(newCells: []) {
      this.cells = newCells
      console.log(this.cells)
    }
  },
  components: {
    Square
  }
}
</script>

<style lang="scss">
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
