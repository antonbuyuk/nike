<template>
    <div class="icon-round">
        <div class="icon-round__img">
            <client-only>
                <img v-if="filepath" :src="filepath" class="icon-round__icon center" />
                <div v-else-if="name" class="icon-round__name center">{{ name }}</div>
                <div v-else-if="number" class="icon-round__number center">{{ number }}</div>
            </client-only>
        </div>
        <client-only>
            <div v-if="text" class="icon-round__text">{{ text }}</div>
        </client-only>
    </div>
</template>

<script>
export default {
    props: {
        filepath: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        number: {
            type: Number,
            default: null
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../../assets/styles/helpers/variables';
@import '../../../assets/styles/helpers/mixin';

.icon-round {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    &__img {
        position: relative;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 1px solid $gray;
        cursor: pointer;
    }

    &__icon {

    }

    &__number {
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1;
        color: $blue_1;
    }

    &__name {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1;
        color: $blue_1;
    }

    &__text {
        margin-left: 1.2rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1;
        color: $text;
    }

    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
@include below($s) {
    .icon-round__img{
        border: none;
    }
}
</style>
