<template>
    <div class="logo">
        <nuxt-link to="/" class="logo__link">
            <Icon :icon="'logo'" :is-image="true" />
        </nuxt-link>
    </div>
</template>

<script>
export default {
    components: {
        Icon: () => import('../elements/icons/Icon')
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';
.logo {

    &__link {
        display: flex;

        img {
            width: 7.8rem;
            height: 7.8rem;

            @include below($sm) {
                width: 4.8rem;
                height: 4.8rem;
            }

            @include between($sm, $md) {
                width: 6rem;
                height: 6rem;
            }
        }
    }
}
</style>
