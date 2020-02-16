<template>
    <div class="dialogs">
        <Basket />
    </div>
</template>

<script>
export default {
    components: {
        Basket: () => import('../blocks/Basket')
    }
};
</script>
