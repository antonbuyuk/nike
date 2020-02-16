<template>
    <div class="app">
        <Header />
        <nuxt />
        <Footer />
        <Dialogs />
    </div>
</template>

<script>
export default {
    components: {
        Header: () => import('../components/header/Header'),
        Footer: () => import('../components/footer/Footer'),
        Dialogs: () => import('../components/blocks/Dialogs')
    },

    mounted () {}
};
</script>
