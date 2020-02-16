
<template>
    <div class="basket-card">
        <div class="basket-card__image">
            <el-image :src="image" />
        </div>
        <div class="basket-card__info">
            <div class="basket-card__title">
                {{ title }}
            </div>
            <div class="basket-card__size">
                {{ size }}
            </div>
            <div class="basket-card__footer">
                <InputNumber :size="'small'" :props-value.sync="count" :max-value="quantity" :props-handle-change="handleChange" />
                <div class="basket-card__price">
                    {{ price.price }} {{ price.currency }}
                </div>
            </div>
            <button class="basket-card__remove" @click="removeElement">
                <i class="el-icon el-icon-close" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        InputNumber: () => import('../formElements/InputNumber')
    },

    props: {
        id: {
            type: Number,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
        },
        price: {
            type: Object,
            default: null
        },
        stateCount: {
            type: [Number, String],
            default: null
        },
        quantity: {
            type: Number,
            default: null
        },
        propsHandleChange: {
            type: Function,
            default: null
        }
    },

    data () {
        return {
            count: this.stateCount
        };
    },

    methods: {
        removeElement () {
            const id = this.id;
            const cookiesBasket = this.$cookies.get('basket');

            cookiesBasket.forEach((element, idx) => {
                if (element.id === id) {
                    cookiesBasket.splice(idx, 1);
                }
            });

            const data = cookiesBasket;

            this.$store.commit('Basket/setData', { label: 'basketItems', data });
            this.$cookies.set('basket', data, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
        },

        handleChange (value) {
            if (this.propsHandleChange) {
                this.propsHandleChange(value);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.basket-card {
    position: relative;
    display: flex;

    &__image {
        position: relative;
        width: 100%;
        display: flex;
        transition: $hoverAnim;
        max-width: 7.5rem;
        margin-right: 2rem;

        &:hover {
            opacity: .5;
        }

        .el-image {
            width: 100%;

            img {
                width: 100%;
            }
        }
    }

    &__info {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    &__remove {
        position: absolute;
        right: 0;
        top: 0;
        border: none;
        background: none;
        box-shadow: none;

        .el-icon {
            font-weight: 700;
            font-size: 1.2rem;
            color: $gray_2;
            transition: $hoverAnim;
        }

        &:hover {

            .el-icon {
                columns: $gray_3;
            }
        }
    }

    &__title {
        color: $black;
        transition: $hoverAnim;
        text-decoration: none;
        width: 100%;
        display: block;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: left;
        margin-bottom: .8rem;

        &:hover {
            color: $black-hover;
        }
    }

    &__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: auto;
    }

    &__price {
        color: $black;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.1rem;
        text-align: left;
    }

    &__size {
        color: $black-hover;
        font-size: 1.6rem;
        line-height: 2.1rem;

    }
}
</style>
