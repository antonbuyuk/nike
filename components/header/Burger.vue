<template>
    <button class="burger">
        <Icon :icon="'burger'" :is-image="false" />
    </button>
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
.burger {
    border: none;
    box-shadow: none;
    background: none;
    display: flex;

    .icon  {
        width: 4rem;
        height: 4rem;
        display: block;
    }
}
</style>
