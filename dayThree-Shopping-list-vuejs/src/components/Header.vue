<template>
  <header>
    <h1 v-if="isHomeRoute"><span>Day 3 :</span>&nbspShopping List<span>.</span></h1>
    <div class="iconBasket">
      <RouterLink :to="{ name: 'my-basket' }">
        <a>
          <font-awesome-icon icon="fa-solid fa-cart-shopping" size="2xl" style="color: #4db6ac" />
        </a>
      </RouterLink>
      <span v-if="counterValue > 0">{{ counterValue }}</span>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

export default defineComponent({
  computed: {
    isHomeRoute() {
      return this.$route.path === '/'
    },
    counterValue() {
      store.dispatch('initializeState')
      return store.getters.getCounterValue
    }
  }
})
</script>
<style scoped lang="scss">
header {
  display: flex;
  justify-content: end;

  h1 {
    display: flex;
    left: 10px;
    width: 100%;
    justify-content: center;
    margin: 10px 30px 0 0;
    color: rgb(238, 221, 221);
    letter-spacing: 1px;
    font-family: sans-serif;
    text-transform: uppercase;

    span {
      color: #dc3545;
    }
  }

  .iconBasket {
    display: flex;
    margin: 25px 30px 0 0;

    span {
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      height: 60%;
      color: white;
      padding: 6px;
      color: white;
      font-weight: bold;
      position: relative;
      top: -8px;
      right: 13px;
    }
  }
}
</style>
