<template>
    <div class="price">
        <div v-if="price.old" class="price-old">
            {{ price.old }} {{ price.currency }}
        </div>
        <div class="price-new">
            {{ price.price }} {{ price.currency }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        price: {
            type: Object,
            default: null
        }
    }

};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';
.price {
    display: flex;
    align-items: center;

    &-old {
        font-size: 2.4rem;
        line-height: 3rem;
        color: $gray_3;
        text-decoration: line-through;
        margin-right: 1.5rem;
    }

    &-new {
        font-size: 2.4rem;
        line-height: 3rem;
        color: $black;
        font-weight: 700;
    }
}
</style>
