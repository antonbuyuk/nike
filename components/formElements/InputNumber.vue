<template>
    <div :class="size ? `input-number--${size}` : 'input-number'">
        <el-input-number v-model="value" :min="minValue" :max="maxValue" @change="handleChange" />
        <div v-if="error" class="input-number__error">
            {{ error }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        propsValue: {
            type: Number,
            default: 0
        },

        minValue: {
            type: Number,
            default: 0
        },

        maxValue: {
            type: Number,
            default: 99
        },

        size: {
            type: String,
            default: null
        },

        error: {
            type: String,
            default: null
        },

        propsHandleChange: {
            type: Function,
            default: null
        }
    },

    computed: {
        value: {
            get () { return this.propsValue; },
            set (val) {
                this.$emit('update:propsValue', val);
            }
        }
    },

    methods: {
        handleChange (value) {
            if (this.propsHandleChange) {
                this.propsHandleChange(value);
            }
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/styles/components/input";
</style>
