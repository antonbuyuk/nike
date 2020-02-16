<template>
    <div v-if="show" class="search">
        <Input :props-value.sync="search" :placeholder="'Поиск'" />
    </div>
</template>

<script>
export default {
    components: {
        Input: () => import('../formElements/Input')
    },

    props: {
        show: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            search: null
        };
    },

    computed: {},

    mounted () {},

    methods: {}
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';

.search {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    min-width: 25rem;
}
</style>
