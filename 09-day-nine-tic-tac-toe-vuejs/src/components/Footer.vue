<template>
  <footer>
    <p>© 2023 - <span>Fatima.</span> Tous droits réservés.</p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px;
  background-color: rgb(31, 29, 29);
  p {
    font-size: 16px;
    color: rgb(227, 216, 216);
    margin-bottom: 0;
    span {
      color: #cd3545;
    }
  }
}
</style>
