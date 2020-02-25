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
                <el-scrollbar v-if="basketItems.length > 5">
                    <div v-for="(card, i) in basketItems" :key="i" class="basket__item">
                        <BascketCard
                            :id="card.id"
                            :image="card.image"
                            :title="card.title"
                            :price="card.price"
                            :size="card.size"
                            :state-count.sync="count"
                        />
                    </div>
                </el-scrollbar>
                <template v-else>
                    <div v-for="(card, i) in basketItems" :key="i" class="basket__item">
                        <BascketCard
                            :id="card.id"
                            :image="card.image"
                            :title="card.title"
                            :price="card.price"
                            :size="card.size"
                            :quantity="card.quantity"
                            :state-count.sync="card.count"
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
export default {
    middleware: ['isBasket'],

    components: {
        BascketCard: () => import('../cards/BascketCard'),
        Title: () => import('../elements/Title'),
        Button: () => import('../elements/Button')
    },

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
            get () {
                return this.$store.state.Basket.basketDialog;
            },

            set (value) {
                this.$store.commit('Basket/setData', { label: 'basketDialog', data: value });
            }
        }
    },

    methods: {
        handleClose () {
            this.$store.commit('Basket/setData', { label: 'basketDialog', data: false });
        },

        handleOpen () {
            if (this.$device.isDesktop) {

            }
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
            z-index: 2;

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
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 4rem;
        }
    }

    &__title {
        margin-bottom: 5rem;

        .title  {
            margin-bottom: 0;
        }
    }

    &__content {
        overflow: hidden;

        .el-scrollbar {
            height: 100%;

            &__wrap {
                overflow-x: hidden;
            }
        }
    }

    &__item {

        &:not(:last-child) {
            margin-bottom: 2rem;
        }
    }

    &__footer {
        margin-top: auto;
        padding-top: 2rem;

        .button {
            width: 100%;
        }
    }

    &-price {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 3.2rem;

        &__text {
            color: $black;
            font-weight: 700;
            font-size: 2rem;
            line-height: 2.4rem;
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
