
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
            <div v-if="!isSmallMobile" class="basket-card__footer">
                <InputNumber :size="'small'" :props-value.sync="count" :max-value="quantity" :props-handle-change="handleChange" />
                <div class="basket-card__price">
                    <Panel v-if="panel" :panel-type="panel.type" :content="panel.content" />
                    <div class="basket-card__price-old">
                        {{ price.old }} {{ price.currency }}
                    </div>
                    <div class="basket-card__price-new">
                        {{ price.price }} {{ price.currency }}
                    </div>
                </div>
            </div>
            <button class="basket-card__remove" @click="removeElement">
                <i class="el-icon el-icon-close" />
            </button>
        </div>
        <div v-if="isSmallMobile" class="basket-card__footer">
            <InputNumber :size="'small'" :props-value.sync="count" :max-value="quantity" :props-handle-change="handleChange" />
            <div class="basket-card__price">
                <Panel v-if="panel" :panel-type="panel.type" :content="panel.content" />
                <div class="basket-card__price-old">
                    {{ price.old }} {{ price.currency }}
                </div>
                <div class="basket-card__price-new">
                    {{ price.price }} {{ price.currency }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mobile } from '~/mixin/mobile';
export default {
    components: {
        InputNumber: () => import('../formElements/InputNumber'),
        Panel: () => import('../elements/Panel')
    },

    mixins: [mobile],

    props: {
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
        color: {
            type: String,
            default: null
        },
        price: {
            type: Object,
            default: null
        },
        panel: {
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

    computed: {
        count: {
            get () { return this.stateCount; },
            set (val) { this.$emit('update:stateCount', val); }
        }
    },

    methods: {
        removeElement () {
            const size = this.size;
            const color = this.color;
            const cookiesBasket = this.$cookies.get('basket');

            cookiesBasket.forEach((element, idx) => {
                if (element.size === size && element.color === color) {
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

    @include below(500px) {
        flex-wrap: wrap;
    }

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

        @include below(500px) {
            width: calc(100% - 7.5rem - 2.5rem);
        }
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

        @include below(500px) {
            margin-top: 2rem;
            position: relative;
        }
    }

    &__price {
        color: $black;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.1rem;
        text-align: left;
        display: flex;
        align-items: center;

        &-old {
            margin-right: 1.25rem;
            color: $gray_3;
            text-decoration: line-through;
        }

        .panel  {
            margin-right: 2rem;

            @include below(500px) {
                position: absolute;
                right: 0;
                top: 0;
                transform: translateY(-100%);
                margin-right: 0;
            }
        }
    }

    &__size {
        color: $black-hover;
        font-size: 1.6rem;
        line-height: 2.1rem;

    }
}
</style>
