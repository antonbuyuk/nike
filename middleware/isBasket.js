export default async ({ app, store }) => {
    if (!store.state.Basket.basketItems) {
        const data = app.$cookies.get('basket');
        await store.commit('Basket/setData', { label: 'basketItems', data });
    }
};
