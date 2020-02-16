<template>
    <div class="text-content" v-html="content">
        {{ content }}
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: null
        },
        border: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/styles/helpers/variables";
@import '../../assets/styles/helpers/mixin';

.text-content {
    position: relative;

    p {
        font-size: 2rem;
        font-weight: 400;
        line-height: 3rem;
        color: $black;

        &:not(:last-child) {
            margin-bottom: 1.5rem;
        }

        b {
            font-weight: 700;
        }
    }
}
</style>
