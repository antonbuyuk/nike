<template>
    <button type="button" class="button" @click="handleClick">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        propsHandleClick: {
            type: Function,
            default: null
        },
        text: {
            type: String,
            default: null
        }
    },

    mounted () {},

    methods: {
        handleClick (value) {
            if (this.propsHandleClick) {
                this.propsHandleClick(value);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/helpers/variables";
@import '../../assets/styles/helpers/mixin';

.button {
    position: relative;
    border-radius: .8rem;
    color: $white;
    background-color: $black;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    padding: 1.6rem 4rem 1.8rem;
    border: none;
    transition: $hoverAnim;

    @include below($md) {
        font-size: 1.8rem;
        line-height: 2.3rem;
        padding: 1.4rem 3.2rem 1.5rem;
    }

    &:hover {
        background-color: $black-hover;
    }
}
</style>
