<template>
    <div class="home">
        <top />

        <div class="page">
            <div class="nav">
                <ul>
                    <li>
                        <!-- <a href="#">正在热映</a> -->
                        <router-link :to="{ path: '/in_theaters' }">正在热映</router-link>
                    </li>
                    <li>
                        <a href="#">top250</a>
                    </li>
                    <li>
                        <a href="#">口碑榜</a>
                    </li>
                    <li>
                        <a href="#">北美票房榜</a>
                    </li>
                </ul>
            </div>
        </div>


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

            }
        }
    }
</script>

<style lang="scss" scoped>
    @function rem($px){
        @return ($px/100)*1rem;
    }

    .home {
        min-height: 100vh;
        background-color: #fff;

        .page {
            margin-top: rem(40);
            padding: 0 rem(36);
            overflow: hidden;

            .nav {
                ul {
                    padding-top: rem(12);

                    li {
                        float: left;
                        width: 50%;
                        padding: rem(6);

                        color: #494949;

                        box-sizing: border-box;

                        a {
                            display: block;
                            width: 100%;
                            padding: rem(24) 0;
                            line-height: rem(40);
                            font-size: 16px;
                            color: #494949;
                            background-color: #f6f6f6;
                            text-align: center;
                            border-radius: rem(4);
                            overflow: hidden;
                        }
                    }
                }
            }
        }

        // 发现 => 栏目
        .column {
            border: 1px solid #ededed;
            box-sizing: border-box;
            overflow: hidden;
            margin-top: 30px;
            padding: 0 rem(10);

            .jc_ul {
                overflow: hidden;
                li {
                    width: 33.3333333%;
                    float: left;
                    box-sizing: border-box;
                    padding: rem(6);
                    >a {
                        display: block;
                        line-height: rem(60);
                        background-color: #f6f6f6;
                        overflow: hidden;

                        >p {
                            text-align: center;
                        }
                        >span {
                            float: right;
                            margin-right: 20px;
                        }

                    }



                }
            }
        }

    }
</style>
