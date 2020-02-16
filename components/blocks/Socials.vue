<template>
    <div class="socials">
        <a v-for="(item, i) in socials" :key="i" :href="item.link" class="socials__link">
            <Icon :style="`width: 4rem; height: 4rem`" :icon="item.icon" />
        </a>
    </div>
</template>

<script>
export default {
    components: {
        Icon: () => import('../elements/icons/Icon')
    },

    props: {
        socials: {
            type: Array,
            default: null
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.socials {
    display: flex;
    align-items: center;

    @include between($md, $lg) {
        padding: 4rem 0;
    }

    &__link {
        display: flex;
        transition: hoverAnim;

        &:hover {
            opacity: 0.7;
        }

        &:not(:last-child) {
            margin-right: 1.2rem
        }
    }
}
</style>
