<template>
  <div class="square" @click="handleClick">
    <div :class="cell"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['turnTo', 'cell'],
  methods: {
    handleClick(e: MouseEvent) {
      const target = e.target as Element
      const firstChild = target.firstChild as Element

      if (firstChild) {
        const taken =
          firstChild.classList.contains('circle') || firstChild.classList.contains('cross')

        if (!taken) {
          if (this.turnTo === 'circle') {
            firstChild.classList.add('circle')
            this.$emit('update-turn', 'cross')
          }
          if (this.turnTo === 'cross') {
            firstChild.classList.add('cross')
            this.$emit('update-turn', 'circle')
          }
        }
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 198px;
  height: 198px;
  border: 1px solid whitesmoke;
  .circle {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: 20px solid rgb(174, 167, 27);
    box-sizing: border-box;
  }
  .cross {
    width: 150px;
    height: 150px;
    position: relative;
    transform: rotate(45deg);
    &::before,
    &::after {
      content: '';
      background-color: $red;
      position: absolute;
    }
    &::before {
      left: 50%;
      width: 15%;
      margin-left: -10%;
      height: 100%;
    }
    &::after {
      top: 50%;
      height: 15%;
      margin-top: -10%;
      width: 100%;
    }
  }
}
</style>
