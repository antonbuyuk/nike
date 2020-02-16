<template>
    <div :class="horizontal ? 'footer-menu--horizontal' : 'footer-menu'">
        <div v-if="title" class="footer-menu__title">
            {{ title }}
        </div>
        <ul v-if="menu" class="footer-menu__list">
            <li
                v-for="(item, i) in menu"
                :key="i"
                class="footer-menu__item"
            >
                <nuxt-link :to="item.link" class="footer-menu__link">
                    {{ item.label }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null
        },

        menu: {
            type: Array,
            default: null
        },

        horizontal: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.footer-menu {
    position: relative;
    display: flex;
    flex-direction: column;

    &__title {
        color: $black;
        font-size: 2rem;
        line-height: 2.6rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    &__item {

        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    &__link {
        color: $black;
        font-size: 2rem;
        line-height: 2.6rem;
        text-decoration: none;
        transition: $hoverAnim;

        &:hover {
            color: $black-hover;
        }
    }

    &--horizontal {
        position: relative;

        .footer-menu__list {
            display: flex;
            align-items: center;
            justify-content: space-between;

            @include below($md) {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        .footer-menu__item {
            margin-bottom: 0;
        }

        .footer-menu__link {
            color: $gray_3;
            font-size: 1.2rem;
            line-height: 1.6rem;
            text-decoration: none;
            transition: $hoverAnim;

            &:hover {
                color: $gray_2;
            }
        }
    }
}
</style>
