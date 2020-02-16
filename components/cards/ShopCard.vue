<template>
    <div class="card" :class="`card--${cardSize}`">
        <nuxt-link :to="link" class="card__image">
            <el-image :src="image" lazy />
        </nuxt-link>
        <div class="card__info">
            <Panel v-if="panel && cardSize === 'small'" :panel-type="panel.type" :content="panel.content" />
            <nuxt-link :to="link" class="card__title">
                {{ title }}
            </nuxt-link>
            <div class="card__price">
                <div v-if="price.old" class="card__price--old">
                    {{ price.old }}
                </div>
                <div class="card__price--new">
                    {{ price.price }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Panel: () => import('../elements/Panel')
    },

    props: {
        image: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        price: {
            type: Object,
            default: null
        },

        cardSize: {
            type: String,
            default: null
        },

        panel: {
            type: Object,
            default: null
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.card {
    position: relative;

    &__image {
        position: relative;
        width: 100%;
        display: flex;
        margin-bottom: 3rem;
        transition: $hoverAnim;

        @include below($md) {
            margin-bottom: 1.5rem;
        }

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

    &__title {
        font-size: 2rem;
        line-height: 2.6rem;
        color: $black;
        transition: $hoverAnim;
        text-decoration: none;
        width: 100%;
        text-align: center;
        display: block;
        margin-bottom: .8rem;

        @include below($md) {
            font-size: 1.8rem;
            line-height: 2.3rem;
        }

        &:hover {
            color: $black-hover;
        }
    }

    &__price {
        display: flex;
        align-items: center;
        justify-content: center;

        &--old {
            color: $gray_3;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 2.4rem;
            text-align: center;
            margin: 0 1rem;
            text-decoration: line-through;

            @include below($md) {
                font-size: 1.4rem;
                line-height: 1.8rem;
            }
        }

        &--new {
            color: $black;
            font-size: 1.8rem;
            font-weight: 700;
            line-height: 2.4rem;
            text-align: center;
            margin: 0 1rem;

            @include below($md) {
                font-size: 1.4rem;
                line-height: 1.8rem;
            }
        }
    }

    &--small {
        position: relative;
        display: flex;

        .card__image {
            max-width: 7.5rem;
            margin-right: 2rem;
        }

        .card__title {
            font-size: 1.6rem;
            line-height: 2.1rem;
            text-align: left;
            margin-bottom: .8rem;
        }

        .card__price {
            justify-content: flex-start;

            &--old {
                font-size: 1.6rem;
                line-height: 2.1rem;
                text-align: left;
                margin-left: 0;
            }

            &--new {
                font-size: 1.6rem;
                line-height: 2.1rem;
                text-align: left;
                margin-left: 0;
            }
        }

        .panel {
            margin-bottom: .8rem;
        }
    }
}
</style>
