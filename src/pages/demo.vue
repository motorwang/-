<template>
    <div class="demo">
        <indicator />
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },

        methods: {
            created(){
                indicator.open('加载中...');
            },
        }
    }
</script>

<style lang="scss" scoped>
    .demo {
        height: 100vh;
    }
</style>
