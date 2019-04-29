<template>
    <div id="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>

        <loading v-model="isLoading"></loading>
    </div>
</template>

<script>
import { mapState } from "vuex";
import loading from "./components/loading/loading.vue";
    export default {
        name: 'App',
        components: { loading },

        data(){
            return {

            }
        },

        computed: {
            ...mapState({
                isLoading: state => state.isLoading
            })
        }
    }
</script>

<style lang="scss">
    @import "./assets/css/reset.css";
</style>
