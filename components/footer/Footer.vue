<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__layout">
                <div class="row">
                    <div class="footer__menu">
                        <Menu :title="'Информация'" :menu="menu1" />
                    </div>
                    <div class="footer__menu">
                        <Menu :title="'О Nike'" :menu="menu2" />
                    </div>
                    <div class="footer__socials">
                        <LineRow v-if="isTablet" />
                        <Socials :socials="socialsList" />
                        <LineRow v-if="isTablet" />
                    </div>
                </div>
            </div>
            <div class="footer__layout">
                <div class="row">
                    <div class="footer__copyright">
                        <Copyright :text="'© Nike, Inc.,2020 Все права защищены.'" />
                    </div>
                    <div class="footer__menu">
                        <Menu :menu="menu3" :horizontal="true" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex';
import { mobile } from '~/mixin/mobile';
export default {
    components: {
        Menu: () => import('./Menu'),
        Socials: () => import('../blocks/Socials'),
        Copyright: () => import('../elements/Copyright'),
        LineRow: () => import('../elements/Line')
    },

    mixins: [mobile],

    data () {
        return {
            copyright: null
        };
    },

    computed: {
        ...mapState('Footer', ['menu1', 'menu2', 'menu3', 'socialsList'])
    }
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.footer {
    position: relative;
    background-color: $gray;
    padding: 9rem 0 8rem;

    @include below($md) {
        padding: 6rem 0;
    }

    &__layout {

        &:not(:last-child) {
            margin-bottom: 12rem;

            @include between($md, $lg) {
                margin-bottom: 3rem;
            }

            @include below($md) {
                margin-bottom: 0;
            }
        }
    }

    &__menu {
        padding: 0 2rem;
        width: 100%;

        &:nth-child(1) {

            @include above($md) {
                max-width: 30rem;
            }

            @include below($md) {
                margin-bottom: 7rem;
            }
        }

        &:nth-child(2) {

            @include above($md) {
                max-width: 35rem;
            }
        }

        &:last-child {
            max-width: 70rem;
            margin-left: auto;

            @include between($md, $lg) {
                max-width: 100%;
                margin-bottom: 8rem;
            }

            @include below($md) {
                max-width: 100%;
                margin-left: 0;
                margin-bottom: 5.5rem;
            }
        }
    }

    &__socials {
        padding: 0 2rem;
        margin-left: auto;

        @include below($lg) {
            width: 100%;
        }
    }

    &__copyright {
        padding: 0 2rem;

        @include below($lg) {
            width: 100%;
            order: 2;
        }
    }
}
</style>
