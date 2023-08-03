import { Store } from 'vuex'

declare module 'vuex' {
  // declare your own store states
  interface State {
    productsSelected: []
    counterValue: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
