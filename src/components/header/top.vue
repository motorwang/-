<template>
    <div class="header">
        <div class="top">
            <div class="logo"></div>
            <div class="center">
                <span></span>
            </div>
            <div class="right">打开豆瓣App</div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    @function rem($px){
        @return ($px/100)*1rem;
    }

    .header {
        .top{
            height: rem(94);
            line-height: rem(94);
            padding: 0 rem(36);
            background: #fff;
            box-sizing: border-box;
            box-shadow: 0 1px 2px rgba(0,0,0,.08);
            justify-content: flex-start;
            display: flex;
            align-items: center;

            .logo {
                width: rem(96);
                height: rem(44);
                background: url("./images/logo.png") no-repeat;
                background-size: 100% 100%;
                margin-right: rem(30);
            }

            .center {
                display: flex;
                flex: 1;

                span {
                    display: block;
                    width: rem(48);
                    height: rem(36);
                    margin-top: rem(8);
                    background: url("./images/search.png") no-repeat;
                    background-size: 100% 100%;
                }
            }

            .right {
                width: rem(202);
                height: rem(58);
                line-height: rem(58);
                text-align: center;
                border-radius: rem(12);
                background-color: #42bd56;
                color: #fff;
                font-size: rem(26);
            }
        }
    }

</style>
