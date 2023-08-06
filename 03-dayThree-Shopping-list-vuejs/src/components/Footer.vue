<template>
    <footer>
        <p>© 2023 - <span>Fatima.</span> Tous droits réservés.</p>
    </footer>
</template>

<script lang="ts">

export default {

};
</script>

<style scoped lang="scss">
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    background-color: #232121;
    border-top: 1px solid #575353;
    ;

    p {
        text-align: center;
        font-size: 18px;
        color: rgb(238, 221, 221);

        span {
            color: #dc3545;
        }
    }
}
</style>