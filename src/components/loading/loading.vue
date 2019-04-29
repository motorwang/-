<template>
    <div class="loading">
        <div class="inner">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },

        methods: {
            created() {},


        }
    }
</script>

<style lang="scss" scoped>
    .loading{
        height: 100vh;

        .inner {
            position: fixed;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            border-radius: 5px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-align: center;
        }
    }
</style>
