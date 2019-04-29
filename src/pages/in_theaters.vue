<template lang="html">
    <!-- 正在热映 -->
    <div class="in_theaters" v-if="list!=null">
        <top />

        <h1>正在热映</h1>
        <section id="list">
            <router-link class="item" :to="{ path: '/in_theaters' }" v-for="(item, i) in list" :key="i">
                <div class="img">
                    <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=36b2ee94a7014c080d3620f76b12696d/0df3d7ca7bcb0a462d89e8046563f6246b60af60.jpg" alt="">
                </div>
                <div class="info">
                    <h3>{{item.title}}</h3>
                    <p class="rank">
                        <span class="stars">{{item.rating.stars}}</span>
                        <span>{{item.rating.average}}</span>
                    </p>
                </div>
            </router-link>
        </section>
    </div>
</template>

<script>
import top from "../components/header/top.vue";

    export default {
        components: {
            top
        },

        data(){
            return {
                list: null,
            }
        },

        created(){
            this.in_theaters();
        },

        methods: {
            // https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a
            in_theaters(){
                this.post("movie/in_theaters", {
                    start: 0,
                    count: 10
                }).then( res => {
                    console.log(res.data);
                    this.list = res.data.subjects;
                    console.log(res.data.subjects[0].images.small);
                }, (err => {
                    console.log(err);
                }))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function rem($px){
        @return ($px/100)*1rem;
    }

    .in_theaters {
        min-height: 100vh;
        background-color: #fff;

        >h1 {
            font-size: rem(48);
            font-weight: normal;
            box-sizing: border-box;
            margin-top: rem(32);
            margin-bottom: rem(12);
            padding-left: rem(28);
        }

        #list{
            padding: rem(40) rem(15);

            .item {
                display: inline-block;
                width: 33.33333333%;
                text-align: center;
                // border: 1px solid #e2e2e2;
                padding: 0 rem(28);
                margin-bottom: rem(20);
                box-sizing: border-box;

                .img {
                    width: rem(182);
                    height: rem(260);

                    img {
                        width:100%;
                        height: 100%;
                    }
                }

                .info {
                    >h3 {
                        font-size: rem(26);
                        font-weight: normal;
                        padding: rem(10) 0 0;
                        color: #494949;
                        overflow: hidden;
                        white-space: nowrap;
		                text-overflow: ellipsis;
                    }
                }
            }
        }
    }
</style>
