<template>
    <header class="header">
        <div v-if="isTablet" class="header__burger">
            <Burger />
        </div>
        <div class="header__logo">
            <Logo />
        </div>

        <div v-if="!isTablet" class="header__menu">
            <Menu :menu="menu" />
        </div>

        <div class="header__btns">
            <div class="header__btns-item">
                <transition name="el-fade-in-linear">
                    <Search :show="showSearch" />
                </transition>
                <IconButton
                    :icon="'search'"
                    :width-icon="'4rem'"
                    :height-icon="'4rem'"
                    :props-handle-click="showSearchFunc"
                />
            </div>
            <div class="header__btns-item">
                <IconButton
                    :icon="'cart'"
                    :width-icon="'4rem'"
                    :height-icon="'4rem'"
                    :props-handle-click="handlerOpenBasketDialog"
                >
                    <span class="cart-elements">
                        {{ cartElements }}
                    </span>
                </IconButton>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
import { mobile } from '~/mixin/mobile';

export default {
    middleware: ['isBasket'],

    components: {
        Burger: () => import('./Burger'),
        Logo: () => import('../blocks/Logo'),
        Menu: () => import('./Menu'),
        IconButton: () => import('../elements/IconButton'),
        Search: () => import('../elements/Search')
    },

    mixins: [mobile],

    data () {
        return {
            showSearch: false
        };
    },

    computed: {
        ...mapState('Header', ['menu']),

        cartElements () {
            if (this.$store.state.Basket.basketItems) return this.$store.state.Basket.basketItems.length;
            return 0;
        }
    },

    methods: {
        showSearchFunc () {
            this.showSearch = !this.showSearch;
        },

        handlerOpenBasketDialog () {
            this.$store.commit('Basket/setData', { label: 'basketDialog', data: true });
        }
    }
};
</script>

<style lang="scss">
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.header {
    position: relative;
    padding: 2rem 4rem 2rem 4.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include below($lg) {
        padding: 1.2rem 2rem 1.2rem 1.2rem;
    }

    @include between($md, $lg) {
        justify-content: flex-start;
    }

    &__logo {

        @include below($lg) {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        @include between($lg, $xl) {
            margin-right: 8rem;
        }
    }

    &__btns {
        display: flex;
        align-items: center;

        @include between($md, $lg) {
            margin-left: auto;
        }

        &-item {
            position: relative;

            &:not(:last-child) {
                margin-right: 1.2rem;

                @include between($md, $lg) {
                    margin-right: 4.2rem;
                }
            }
        }
    }
}

.cart-elements {
    position: absolute;
    top: -.1rem;
    right: -.5rem;
    width: 2.4rem;
    height: 2rem;
    background-color: $red;
    border-radius: 2rem;
    color: $white;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 700;
}
</style>
