<template>
    <ul class="menu">
        <li
            v-for="(item, i) in menu"
            :key="i"
            :class="{
                'menu__item-submenu': item.submemu
            }"
            class="menu__item"
        >
            <nuxt-link :to="item.link.link" class="menu__link">
                {{ item.link.label }}
                <Icon v-if="item.submemu" :icon="'arrow-down'" :is-image="false" />
            </nuxt-link>
            <ul v-if="item.submemu" class="submemu">
                <li v-for="(submemuItem, j) in item.submemu" :key="j" class="submemu__item">
                    <nuxt-link :to="submemuItem.link" class="submemu__link">
                        {{ submemuItem.label }}
                    </nuxt-link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    components: {
        Icon: () => import('../elements/icons/Icon')
    },

    props: {
        menu: {
            type: Array,
            default: null
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.menu {
    display: flex;
    align-items: center;

    &__item {
        position: relative;
        padding: 0 1.5rem;

        &-submenu {

            &:hover {

                .submemu {
                    display: flex;
                }

                .menu {

                    &__link {
                        opacity: .7;

                        .icon {
                            transform: rotate(180deg);
                        }
                    }
                }
            }
        }
    }

    &__link {
        font-size: 2rem;
        line-height: 1;
        text-decoration: none;
        color: $black;
        display: flex;
        align-items: center;
        transition: $hoverAnim;

        .icon {
            width: 1.6rem;
            height: 1.6rem;
            margin-left: .6rem;
            transition: $hoverAnim;
        }
    }

}

.submemu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    background-color: $white;
    z-index: 2;
    width: 100%;
    padding: 2rem 3rem;
    min-width: 25rem;
    left: 50%;
    transform: translateX(-50%);

    &__link {
        font-size: 2rem;
        line-height: 2.6rem;
        color: $black;
        text-decoration: none;
        padding: 0.25rem 0;
        display: block;
        transition: $hoverAnim;

        &:hover {
            opacity: .7;
        }
    }
}
</style>
