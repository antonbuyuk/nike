<template>
    <img v-if="isImage" :src="require(`../../../assets/icons/i_${icon}.svg`)" class="icon" alt="" @click="clickIcon">
    <i v-else class="icon icon--background" :style="`background-image: url(${require(`../../../assets/icons/i_${icon}.svg`)})`" @click="clickIcon" />
</template>

<script>
export default {
    name: 'Icon',

    props: {
        filepath: {
            type: String,
            default: null
        },
        isImage: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: null
        },
        handleClick: {
            type: String,
            default: null
        }
    },

    methods: {
        clickIcon () {
            if (this.handleClick) this.$parent[this.handleClick]();
        }
    }
};
</script>

<style lang="scss">
.icon {
    display: inline-block;

    &--background {
        background-size: contain;
        background-repeat: no-repeat;
    }
}
</style>
