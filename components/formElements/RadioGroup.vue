<template>
    <div
        class="radio-group"
        :class="{
            'radio-group--box': box
        }"
    >
        <div class="radio-group__label">
            {{ label }}
        </div>
        <el-radio-group v-model="value">
            <el-radio-button v-for="item in group" :key="item.id" :label="item.label" />
        </el-radio-group>
        <div v-if="error" class="radio-group__error">
            {{ error }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'RadioGroup',

    props: {
        label: {
            type: String,
            default: null
        },

        group: {
            type: Array,
            default: null
        },

        stateValue: {
            type: [Array, Boolean, String],
            default: null
        },

        box: {
            type: Boolean,
            default: false
        },
        error: {
            type: String,
            default: null
        }
    },

    computed: {
        value: {
            get () { return this.stateValue; },
            set (val) {
                this.$emit('update:stateValue', val);
            }
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/styles/helpers/variables";
@import "../../assets/styles/helpers/mixin";

.radio {

    &-group {
        position: relative;
        display: flex;
        flex-direction: column;

        &__label {
            color: $black;
            font-size: 1.8rem;
            line-height: 2.4rem;
            margin-bottom: 1.6rem;
            font-weight: 700;
        }

        .el-radio-button {

            @include below($sm) {
                margin-bottom: .5rem;
            }

            &:not(:last-child) {
                margin-right: .8rem;

                @include below($sm) {
                    margin: .5rem;
                }
            }

            &:first-child,
            &:last-child {
                .el-radio-button__inner {
                    border-color: $gray_2;
                    border-radius: .8rem;
                }
            }

            &__inner {
                border: 1px solid $gray_2;
                border-radius: .8rem;
                color: $black;
                font-size: 1.6rem;
                line-height: 2.1rem;
                font-weight: 700;
                padding: 1.45rem 2rem;
                box-shadow: none;
                transition: $hoverAnim;

                &:hover {
                    border-color: $black;
                }
            }

            &.is-active {
                .el-radio-button__inner {
                    color: $white;
                    background-color: $black;
                    box-shadow: none;
                    border-color: $black;
                }
            }
        }

        &--box {
            .el-radio-button {
                &__inner {
                    width: 5.2rem;
                    height: 5.2rem;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

            }
        }

        &__error {
            position: absolute;
            top: calc(100% + 0.25rem);
            left: 0;
            color: $red;
            font-size: 1.4rem;
        }
    }
}
</style>
