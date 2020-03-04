<template>
    <div class="view-history">
        <div class="view-history__header">
            <Title v-if="title" :text="title" :type="'h3'" />
            <div v-if="buttons" class="slider-cards__buttons">
                <div slot="button-prev" class="slider-cards__button slider-cards__button--prev swiper-button-prev" />
                <div slot="button-next" class="slider-cards__button slider-cards__button--next swiper-button-next" />
            </div>
        </div>
        <client-only>
            <swiper ref="swiperCars" :options="swiperCards" class="slider-cards">
                <swiper-slide v-for="(card, i) in sliderCards" :key="i" class="slider-cards__slide">
                    <ShopCard
                        :card-size="'small'"
                        :image="card.image"
                        :link="card.link"
                        :title="card.title"
                        :price="card.price"
                        :panel="card.panel"
                    />
                </swiper-slide>
            </swiper>
        </client-only>
    </div>
</template>

<script>
export default {
    components: {
        ShopCard: () => import('../cards/ShopCard'),
        Title: () => import('../elements/Title')
    },

    props: {
        title: {
            type: String,
            default: null
        },

        sliderCards: {
            type: Array,
            default: null
        },
        buttons: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            swiperCards: {
                slidesPerView: 4,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.slider-cards__button--next',
                    prevEl: '.slider-cards__button--prev'
                },
                breakpoints: {
                    1365: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },

                    1023: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },

                    767: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.view-history {
    position: relative;

    @include above(1366px) {
        margin-bottom: 9.6rem;
    }

    @include between(1024px, 1365px) {
        margin-bottom: 8.8rem;
    }

    @include between(768px, 1023px) {
        margin-bottom: 7.2rem;
    }

    @include below(768px) {
        margin-bottom: 4rem;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4rem;

        .title  {
            margin-bottom: 0;
        }
    }
}

.slider {

    &-cards {
        width: 100%;

        &__slide {

            img {
                width: 100%;
            }
        }

        &__buttons {
            position: relative;
            display: flex;
            align-items: center;
        }

        &__button {
            position: relative;
            margin-top: 0;
            height: 2rem;
            width: 2rem;
            background-size: contain;
            background-position: 50%;
            display: flex;
            z-index: 3;

            &--prev {
                left: 0;
                background-image: url("../../assets/icons/i_arrow-left.svg")
            }

            &--next {
                right: 0;
                background-image: url("../../assets/icons/i_arrow-right.svg")
            }
        }
    }
}
</style>
