<template>
    <swiper :ref="sliderRef" :options="options" :class="customClass">
        <swiper-slide v-for="(slide, i) in sliders" :key="i" :class="`${customClass}__slide`">
            <img :src="slide.url" :alt="slide.alt">
        </swiper-slide>
        <div v-if="buttons" slot="button-prev" class="slider__button slider__button--prev swiper-button-prev" />
        <div v-if="buttons" slot="button-next" class="slider__button slider__button--next swiper-button-next" />
    </swiper>
</template>

<script>
export default {
    props: {
        sliderRef: {
            type: String,
            default: null
        },
        options: {
            type: Object,
            default: null
        },
        customClass: {
            type: String,
            default: null
        },
        sliders: {
            type: Array,
            default: null
        },
        buttons: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';
.slider {

    &-main {
        width: calc(100% - 10rem);
        height: 100%;

        @include above($md) {
            height: 70rem;
        }

        @include below($md) {
            width: 100%;
            margin-bottom: 2rem;
        }

        &__slide {
            cursor: url("../../assets/icons/i_cursor.svg") 0 0, auto;
            display: flex;
            position: relative;

            @include below($md) {
                padding-top: 150%;
            }

            img {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                object-fit: cover;
            }
        }
    }

    &-thumbs {
        margin-right: 4rem;
        width: 6rem;

        @include above($xl) {
            height: 70rem;
        }

        @include between($md, $xl) {
            order: 2;
            margin-right: 0;
            margin-left: 4rem;
        }

        @include below($md) {
            order: 2;
            margin-right: 0;
            margin-left: 0;
            width: 100%;
        }

        &__slide {
            position: relative;
            height: auto;
            opacity: 0.5;
            transition: hoverAnim;
            display: flex;

            @include below($lg) {
                max-width: 6rem;
            }

            img {
                max-width: 100%;
            }

            &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                background-color: $black;
                opacity: 0.03;
                z-index: 2;
                transition: hoverAnim;
            }

            &:hover,
            &.swiper-slide-active {
                opacity: 1;

                &::after {
                    opacity: 0;
                }
            }
        }
    }

    &__button {
        margin-top: 0;
        transform: translateY(-50%);
        height: 2rem;
        width: 2rem;
        background-size: contain;
        background-position: 50%;
        display: flex;
        z-index: 3;

        &--prev {
            left: .5rem;
            background-image: url("../../assets/icons/i_arrow-left.svg")
        }

        &--next {
            right: .5rem;
            background-image: url("../../assets/icons/i_arrow-right.svg")
        }
    }
}
</style>
