<template>
    <div class="app">
        <client-only>
            <Header />
        </client-only>
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

    data () {
        return {
            loading: true
        };
    },

    mounted () {
        this.loading = false;
    }
};
</script>
