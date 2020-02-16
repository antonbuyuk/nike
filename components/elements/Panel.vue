<template>
    <div v-if="panelType" class="panel" :class="`panel--${panelType}`">
        {{ content }}
    </div>
</template>

<script>
export default {
    props: {
        panelType: {
            type: String,
            default: null
        },
        content: {
            type: String,
            default: null
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
@import '../../assets/styles/helpers/mixin';
.panel {
    background-color: $red;
    border-radius: 2.4rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 700;
    color: $white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .4rem .78rem;
}
</style>
