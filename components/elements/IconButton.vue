<template>
    <component
        :is="link ? 'nuxt-link' : 'button'"
        :to="link"
        class="icon-btn"
        @click="handleClick"
    >
        <Icon :style="`width: ${widthIcon}; height: ${heightIcon}`" :icon="icon" />
        <slot />
    </component>
</template>

<script>
export default {
    components: {
        Icon: () => import('./icons/Icon')
    },

    props: {
        propsHandleClick: {
            type: Function,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        },
        styleClass: {
            type: [String, Object],
            default: null
        },
        widthIcon: {
            type: String,
            default: null
        },
        heightIcon: {
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

.icon-btn {
    position: relative;
    display: flex;
    align-items: center;
    border: none;
    box-shadow: none;
    background: transparent;
}
</style>
