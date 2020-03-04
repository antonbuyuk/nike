<template>
    <div class="breadcrumbs" :class="styleClass">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item class="breadcrumbs__item" :to="{ path: '/' }">
                Главная
            </el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, i) in list" :key="i" class="breadcrumbs__item" :to="{ path: item.path }">
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    props: {
        styleClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        list () {
            return this.$store.state.Main.breadcrumbs;
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/styles/helpers/variables";
@import '../../assets/styles/helpers/mixin';
.breadcrumbs {
    margin-bottom: 2rem;

    @include below($md) {
        margin-bottom: 2.5rem;
    }

    &__item {
        display: inline-flex;
        align-items: center;

        .el-breadcrumb {
            font-size: 1.2rem;

            &__inner {
                color: $gray_3;
                font-size: 1.2rem;
                line-height: 1.6rem;
                font-weight: 400;

                &:hover {
                    color: $gray_2;
                }
            }

            &__separator {
                margin: 0 .4rem 0 .3rem;
                color: $gray_3;
            }
        }

        &:last-child {
            .el-breadcrumb__inner {
                color: $gray_3
            }
        }
    }
}
</style>
