<template>
  <div class="q-pa-xl q-gutter-sm">
    <q-dialog v-model="showModal">
      <q-card class="q-pa-xl inset-shadow">
        <q-toolbar>
          <q-toolbar-title
            ><span class="text-h3 text-weight-bold text-capitalize"
              >And the winner is</span
            ></q-toolbar-title
          >
        </q-toolbar>

        <q-card-section class="text-h4 text-center">{{ winnerMessage }}</q-card-section>
        <q-btn
          color="red-13"
          label="Start Again"
          @click="startAgain"
          v-close-popup
          class="text-h6 float-right q-mt-md"
        />
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: ['winnerMessage', 'showModal'],
  setup(props) {
    const showModal = ref(props.showModal)

    return {
      showModal
    }
  },
  methods: {
    startAgain() {
      this.$emit('reset')
    }
  }
}
</script>
