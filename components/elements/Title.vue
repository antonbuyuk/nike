<template>
    <h1 v-if="type === 'h1'" class="title" :class="`title--${type}`">
        {{ text }}
    </h1>
    <h2 v-else-if="type === 'h2'" class="title" :class="`title--${type}`">
        {{ text }}
    </h2>
    <h2 v-else-if="type === 'h3'" class="title" :class="`title--${type}`">
        {{ text }}
    </h2>
    <div v-else class="title" :class="`title--text`">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'Title',

    props: {
        text: {
            type: String,
            default: ''
        },

        type: {
            type: String,
            default: null
        }
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';
.title {

    &--h1 {
        font-size: 4rem;
        line-height: 4.8rem;
        font-weight: 700;
        margin-bottom: 2rem;
        position: relative;
        color: $black;

        @include below($md) {
            margin-bottom: 3.2rem;
        }
    }

    &--h2 {
        margin-bottom: 4rem;
        font-size: 3.2rem;
        line-height: 3.8rem;
        font-weight: 700;
        position: relative;
        color: $black;

        @include below($md) {
            font-size: 2.8rem;
            line-height: 3.4rem;
        }
    }

    &--h3{
        margin-bottom: 4rem;
        font-size: 2.4rem;
        line-height: 3rem;
        font-weight: 700;
        position: relative;
        color: $black;
    }

    &--text {
        font-size: 4rem;
        line-height: 4.8rem;
        font-weight: 700;
        margin-bottom: 2rem;
        position: relative;
        color: $black;
    }
}
</style>
