<template>
    <div class="line" :class="`line--${size}`" :style="`background-color: ${color}`" />
</template>

<script>
export default {
    name: 'LineRow',

    props: {
        color: {
            type: String,
            default: '#EAEAEA'
        },

        size: {
            type: String,
            default: null
        }
    }

};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';
.line {
    width: 100%;
    height: 1px;
    margin: 5rem 0;

    @include below($md) {
        margin: 4rem 0;
    }

    &--large {
        margin: 7.5rem 0 8rem;

        @include below($md) {
            margin: 4rem 0;
        }
    }
}
</style>
