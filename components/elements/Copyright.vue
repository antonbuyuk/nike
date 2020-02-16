<template>
    <div class="copyright">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: null
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/helpers/variables";
@import '../../assets/styles/helpers/mixin';
.copyright {
    color: $gray_3;
    font-size: 1.2rem;
    line-height: 1.6rem;

    @include below($md) {
        text-align: left;
    }

    @include between($md, $lg) {
        text-align: center;
    }
}
</style>
