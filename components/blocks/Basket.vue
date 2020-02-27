<template>
    <div class="basket">
        <el-dialog
            :style="{ background: `rgba(0,0,0,.2)` }"
            :visible.sync="basketDialog"
            :top="'0'"
            @closed="handleClose"
            @open="handleOpen"
        >
            <div class="basket__title">
                <Title :text="'Твоя корзина'" :type="'h2'" />
            </div>
            <div v-if="basketItems.length" class="basket__content">
                <el-scrollbar v-if="basketItems.length > 3 || isMobile">
                    <div v-for="(card, i) in basketItems" :key="i" class="basket__item">
                        <BascketCard
                            :image="card.image"
                            :title="card.title"
                            :price="card.price"
                            :panel="card.panel"
                            :size="card.size"
                            :color="card.color"
                            :quantity="card.quantity"
                            :state-count.sync="card.count"
                            :props-handle-change="(value) => changeCount(card, value)"
                        />
                    </div>
                </el-scrollbar>
                <template v-else>
                    <div v-for="(card, i) in basketItems" :key="i" class="basket__item">
                        <BascketCard
                            :image="card.image"
                            :title="card.title"
                            :price="card.price"
                            :panel="card.panel"
                            :size="card.size"
                            :color="card.color"
                            :quantity="card.quantity"
                            :state-count.sync="card.count"
                            :props-handle-change="(value) => changeCount(card, value)"
                        />
                    </div>
                </template>
            </div>

            <div v-else class="basket__empty">
                <p>Корзина пуста</p>
            </div>

            <div v-if="resultPrice !== 0" class="basket__footer">
                <div class="basket-price">
                    <div class="basket-price__text">
                        Предварительный итог:
                    </div>
                    <div class="basket-price__text">
                        {{ resultPrice }} ₽
                    </div>
                </div>
                <Button :text="'Оформить заказ'" />
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { mobile } from '~/mixin/mobile';
export default {
    middleware: ['isBasket'],

    components: {
        BascketCard: () => import('../cards/BascketCard'),
        Title: () => import('../elements/Title'),
        Button: () => import('../elements/Button')
    },

    mixins: [mobile],

    computed: {
        basketItems () {
            if (this.$store.state.Basket.basketItems) return JSON.parse(JSON.stringify(this.$store.state.Basket.basketItems));
            return [];
        },

        resultPrice () {
            if (this.basketItems) {
                let summ = 0;

                this.basketItems.forEach((element) => {
                    const elSumm = element.count * element.price.price;

                    summ = summ + elSumm;
                });

                return summ;
            }

            return 0;
        },

        basketDialog: {
            get () { return this.$store.state.Basket.basketDialog; },
            set (value) { this.$store.commit('Basket/setData', { label: 'basketDialog', data: value }); }
        }
    },

    methods: {
        handleClose () {
            this.$store.commit('Basket/setData', { label: 'basketDialog', data: false });
        },

        handleOpen () {
            if (this.$device.isDesktop) {

            }
        },

        changeCount (card, value) {
            const basket = JSON.parse(JSON.stringify(this.basketItems));

            basket.forEach((element, idx) => {
                if (element.count <= element.quantity && element.color === card.color && element.size === card.size) {
                    element.count = value;
                }

                if (element.count === 0) basket.splice(idx, 1);
            });

            this.$store.commit('Basket/setData', { label: 'basketItems', data: basket });
            this.$cookies.set('basket', basket, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
        }
    }
};
</script>

<style lang="scss">
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.basket {

    .el-dialog {
            margin: 0 0 0 auto;
            border-radius: 0;
            height: 100%;
            max-width: 55rem;
            width: 100%;

            @include above($lg){
                width: 50%;
            }

            @include below(500px) {
                max-width: 31rem;
            }

        &__wrapper {
            height: 100%;
        }

        &__header {
            padding: 0;
        }

        &__headerbtn {
            font-size: 2rem;
            top: 4rem;
            right: 2.5rem;
            width: 4rem;
            height: 4rem;
            z-index: 3;

            @include below(500px) {
                top: 1.5rem;
                right: 1rem;
            }

            &:hover {

                i {
                    color: $black-hover;
                }
            }
        }

        &__close {
            color: $black;
            font-weight: 700;

        }

        &__body {
            position: relative;
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 4rem 2rem 4rem 4rem;

            @include below(500px) {
                padding: 2rem 1rem 2rem 2rem;
            }
        }
    }

    &__title {
        background: linear-gradient(180deg, #FFFFFF 83.85%, rgba(255, 255, 255, 0) 100%);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        padding: 4rem;
        z-index: 2;

        @include below(500px) {
            padding: 2rem;
        }

        .title  {
            margin-bottom: 0;
        }
    }

    &__content {
        padding-top: 5rem;
        overflow: hidden;

        .el-scrollbar {
            height: 100%;

            &__wrap {
                overflow-x: hidden;
            }
        }
    }

    &__item {
        padding: 4rem 0;
        padding-right: 2rem;

        &:first-child {
            padding-top: 0;
            margin-top: 2rem;
        }

        &:not(:last-child) {
            border-bottom: 1px solid $gray_4;
        }

        @include below($md) {
            padding-right: 2rem;
        }

        @include below(500px) {
            padding: 2rem 0;
            padding-right: 1rem;
        }
    }

    &__footer {
        margin-top: auto;
        padding-top: 2rem;
        padding-right: 2rem;

        .button {
            width: 100%;
        }
    }

    &-price {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 3.2rem;

        @include below($md) {
            margin-bottom: 1.8rem;
        }

        &__text {
            color: $black;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2.4rem;

            @include below($md) {
                font-size: 1.4rem;
                line-height: 120%;
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
</style>
