<template>
    <main class="main">
        <div class="container">
            <div class="card">
                <div class="row">
                    <div class="card-gallery">
                        <client-only>
                            <Slider
                                ref="swiperThumbs"
                                :slider-ref="'swiperThumbs'"
                                :options="swiperOptionThumbs"
                                :custom-class="'slider-thumbs'"
                                :sliders="gallery"
                            />

                            <Slider
                                ref="swiperTop"
                                :slider-ref="'swiperTop'"
                                :options="swiperOptionTop"
                                :custom-class="'slider-main'"
                                :sliders="gallery"
                                :buttons="true"
                                :panel="true"
                            />
                        </client-only>
                        <div class="card-gallery__panel">
                            <Panel v-if="panel" :panel-type="panel.type" :content="panel.content" />
                        </div>
                    </div>
                    <div class="card-content">
                        <BreadCrumbs />
                        <Title :text="name" :type="'h1'" />
                        <div class="card-price">
                            <Price :price="price" />
                        </div>
                        <LineRow />
                        <div v-if="!isEmpty" class="card-properties">
                            <div class="card-properties__element">
                                <RadioGroup :state-value.sync="properties.size" :label="'Размер:'" :group="sizes" :box="true" :error="errors.size" />
                            </div>
                            <div class="card-properties__element">
                                <RadioGroup :state-value.sync="properties.color" :label="'Цвет:'" :group="colors" :error="errors.color" />
                            </div>
                            <div class="card-properties__element">
                                <InputNumber :props-value.sync="properties.count" :max-value="quantity" :error="errors.count" />
                                <Button :text="'В корзину'" :props-handle-click="addBasket" />
                            </div>
                        </div>
                        <div v-else class="card-properties__empty">
                            <p>Товар закончился</p>
                        </div>
                        <LineRow />
                        <TextBlock :content="content" />
                    </div>
                </div>
                <LineRow v-if="catalog" :size="'large'" />
                <Title v-if="catalog" :text="'Смотрите также'" :type="'h2'" />
                <div v-if="catalog" class="row">
                    <div v-for="(card, i) in catalog" :key="i" class="catalog-list__card">
                        <ShopCard :image="card.image" :link="card.link" :title="card.title" :price="card.price" />
                    </div>
                </div>
                <LineRow :size="'large'" />
                <ViewsHistory v-if="sliderCards" :title="'История просмотров'" :slider-cards="sliderCards" :buttons="true" />
            </div>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
import config from '../nuxt.config';
export default {
    components: {
        BreadCrumbs: () => import('../components/elements/BreadCrumbs'),
        Title: () => import('../components/elements/Title'),
        LineRow: () => import('../components/elements/Line'),
        Slider: () => import('../components/blocks/Slider'),
        Price: () => import('../components/blocks/Price'),
        RadioGroup: () => import('../components/formElements/RadioGroup'),
        InputNumber: () => import('../components/formElements/InputNumber'),
        Button: () => import('../components/elements/Button'),
        TextBlock: () => import('../components/elements/TextBlock'),
        ShopCard: () => import('../components/cards/ShopCard'),
        Panel: () => import('../components/elements/Panel'),
        ViewsHistory: () => import('../components/blocks/ViewsHistory')
    },

    data () {
        return {
            swiperOptionTop: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
                navigation: {
                    nextEl: '.slider__button--next',
                    prevEl: '.slider__button--prev'
                }
            },
            swiperOptionThumbs: {
                slidesPerView: 'auto',
                spaceBetween: 15,
                centeredSlides: true,
                direction: 'vertical',
                slideToClickedSlide: true,
                breakpoints: {
                    767: {
                        direction: 'horizontal',
                        spaceBetween: 20
                    }
                }
            },

            properties: {
                size: null,
                color: null,
                count: null
            },

            errors: {
                size: null,
                color: null,
                count: null
            }
        };
    },

    computed: {
        ...mapState('Main', ['name', 'isEmpty', 'gallery', 'panel', 'price', 'sizes', 'colors', 'content', 'quantity', 'sliderCards', 'catalog']),
        ...mapState('Basket', ['basketItems'])
    },

    async fetch ({ app, store, route }) {
        await store.dispatch('Main/getData', { url: `${config.env.CLIENT_URL}/data/list.json` }).then((data) => {
            store.commit('Main/setData', { label: 'sliderCards', data: data.sliderCards });
            store.commit('Main/setData', { label: 'catalog', data: data.catalog });
        });

        store.commit('Main/setBreadCrumbs', [
            { name: 'Одежда', path: '/' },
            { name: 'Худи и свитшоты', path: '/' },
            { name: 'Худи', path: '/' },
            { name: 'Свитшот Nike', path: '/' }
        ]);
    },

    mounted () {
        setTimeout(() => {
            if (process.client) {
                this.$nextTick(() => {
                    const swiperTop = this.$refs.swiperTop.$refs.swiperTop.swiper;
                    const swiperThumbs = this.$refs.swiperThumbs.$refs.swiperThumbs.swiper;

                    swiperTop.controller.control = swiperThumbs;
                    swiperThumbs.controller.control = swiperTop;
                });
            }
        }, 500);
    },

    methods: {
        checkProperties () {
            this.checkProperty('size', 'Выберите размер');
            this.checkProperty('color', 'Выберите цвет');
            this.checkProperty('count', 'Выберите количество');

            for (const element in this.errors) {
                const item = this.errors[element];
                if (!item) return true;
                else return false;
            }
        },

        checkProperty (property, errorText) {
            this.properties[property] === null || this.properties[property] === 0
                ? this.errors[property] = errorText
                : this.errors[property] = null;
        },

        addBasket () {
            const valid = this.checkProperties();

            if (valid) {
                const cookiesBasket = this.$cookies.get('basket');
                const data = cookiesBasket || [];

                const title = this.name;
                const properties = { ...this.properties, panel: this.panel };
                const price = this.price;
                const quantity = this.quantity;
                const image = this.gallery[0].url;

                let item = {};

                if (data.length) {
                    item = {
                        title,
                        price,
                        image,
                        quantity,
                        ...properties
                    };

                    data.forEach((element, idx) => {
                        if (element.size === properties.size && element.color === properties.color) {
                            const count = properties.count + element.count;
                            count > this.quantity ? item.count = this.quantity : item.count = count;
                            cookiesBasket.splice(idx, 1);
                        }
                    });
                } else {
                    item = {
                        title,
                        price,
                        image,
                        quantity,
                        ...properties
                    };
                }

                data.push(item);

                this.$store.commit('Basket/setData', { label: 'basketItems', data });
                this.$cookies.set('basket', data, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 7
                });
            }
        }
    }

};
</script>

<style lang="scss">
@import '../assets/styles/helpers/variables';
@import '../assets/styles/helpers/mixin';

.card {

    &-gallery {
        position: relative;
        display: flex;
        padding: 0 2rem;
        width: 100%;

        @include above($md) {
            max-width: 60rem;
        }

        @include below($md) {
            flex-direction: column;
        }

        @include below($xl) {
            margin: 0 auto 5.5rem;
        }

        @include above($xl) {
            align-items: flex-start;
        }

        &__panel {
            position: absolute;
            right: 3.6rem;
            top: 1.6rem;
            z-index: 2;

            @include below($xl) {
                left: 3.6rem;
                right: auto;
            }
        }
    }

    &-content {
        width: 100%;
        padding: 0 2rem;

        @include above($xl) {
            max-width: calc(100% - 60rem);
        }
    }

    &-properties {

        &__element {
            display: flex;
            align-items: center;

            &:not(:last-child) {
                margin-bottom: 4rem;
            }

            .input-number {
                margin-right: 1.6rem;

                @include below($md) {
                    margin-right: 1.5rem;
                }
            }
        }

        &__empty {

            p {
                color: $gray_3;
                font-size: 2rem;
                line-height: 2.6rem;
            }
        }
    }
}

.catalog-list {

    &__card {
        padding: 0 2rem;

        @include above($md) {
            width: 100%;
            max-width: calc(100% / 3);
        }

        @include below($md) {
            max-width: calc(100% / 2);

            &:nth-child(1) {
                padding-right: 1rem;
            }

            &:nth-child(2) {
                padding-left: 1rem;
            }

            &:last-child {
                display: none;
            }
        }
    }
}

</style>
