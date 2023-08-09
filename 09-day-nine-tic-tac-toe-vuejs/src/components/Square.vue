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

<style lang="css">
.square {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 198px;
  height: 198px;
  border: 1px solid whitesmoke;
}
</style>
