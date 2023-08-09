<template>
  <div class="box">
    <div class="gameboard">
      <template v-for="(cell, index) of cells" :key="cell.id">
        <Square
          :id="index"
          :turn-to="turnTo"
          :cells="cells"
          :cell="cell"
          :winnerMessage="winnerMessage"
          @update-turn="updateTurn"
          @onChangeCells="onChangeCells"
        />
      </template>
    </div>

    <div class="score">
      <div class="circleScore">
        <h3>Score circle</h3>
        <p>{{ circleScore }}</p>
      </div>

      <div class="crossScore">
        <h3>Score cross</h3>
        <p>{{ crossScore }}</p>
      </div>
    </div>
  </div>

  <Modal
    :winnerMessage="winnerMessage"
    :showModal="showModal"
    v-if="winnerMessage"
    @reset="reset"
  />
</template>

<script lang="ts">
import Square from '@/components/Square.vue'
import Modal from './Modal.vue'

export default {
  data() {
    return {
      cells: ['', '', '', '', '', '', '', '', ''],
      turnTo: `circle`,
      winnerMessage: '',
      winningCombos: [[0]],
      circleScore: 0,
      crossScore: 0,
      showModal: false
    }
  },
  methods: {
    updateTurn(newTurn: string) {
      this.turnTo = newTurn
    },
    onChangeCells(newCells: []) {
      this.cells = newCells
      this.andTheWinnerIs()
    },
    andTheWinnerIs() {
      this.winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      this.winningCombos.forEach((combos) => {
        let crossWins = combos.every((cell) => this.cells[cell] === 'cross')

        if (crossWins) {
          this.winnerMessage = 'Cross !'
          this.crossScore++
          this.turnTo = ''
          return
        }
      })

      this.winningCombos.forEach((combos) => {
        let circleWins = combos.every((cell) => this.cells[cell] === 'circle')

        if (circleWins) {
          this.winnerMessage = 'Circle !'
          this.circleScore++
          this.turnTo = ''
          return
        }
      })

      if (this.winnerMessage) {
        this.showModal = true
      }
    },
    reset() {
      this.cells = ['', '', '', '', '', '', '', '', '']
      if (this.winnerMessage === 'Cross Wins !') {
        this.turnTo = 'cross'
      }
      if (this.winnerMessage === 'Circle Wins !') {
        this.turnTo = 'circle'
      }
      if (this.winnerMessage === '') {
        const random = Math.floor(Math.random() * 2)
        if (random == 0) {
          this.turnTo = 'cross'
        } else {
          this.turnTo = 'circle'
        }
      }
      this.winnerMessage = ''
      this.showModal = false
    }
  },
  mounted() {
    console.log(this.cells)
  },
  components: {
    Square,
    Modal
  }
}
</script>

<style lang="scss">
.box {
  display: flex;
  justify-content: center;
  width: 100vw;
  align-items: center;

  .gameboard {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 600px;
    height: 600px;
  }
  .score {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-self: flex-start;
    padding-left: 40px;
    .circleScore,
    .crossScore {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 5px;
      &:first-child {
        border-right: 1px solid white;
        min-height: 100%;
      }
      h3,
      p {
        color: #ffffff8c;
        font-size: 24px;
        text-transform: uppercase;
      }
      p {
        margin-top: 10px;
        color: rgb(245, 230, 9);
      }
    }
  }
}
</style>
