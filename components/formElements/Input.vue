<template>
    <div class="input" :class="{ 'focused': focused }">
        <el-input
            v-model="value"
            :type="type"
            :name="name"
            autocomplete="false"
            aria-hidden="true"
            :placeholder="placeholder"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            @input="handleInput"
        />
    </div>
</template>

<script>
export default {
    name: 'Input',

    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        error: {
            type: [String, Boolean],
            default: false
        },
        propsValue: {
            type: [ String, Number ],
            default: null
        }
    },

    data () {
        return {
            focused: false
        };
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
        },

        handleFocus () {
            this.focused = true;
        },

        handleBlur () {
            this.focused = false;
        },

        handleInput (value) {
            if (this.propsHandleInput) {
                this.propsHandleInput(value);
            }
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/styles/components/input";
</style>
