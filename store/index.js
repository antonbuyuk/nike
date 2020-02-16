import config from '../nuxt.config';

import isBasket from '../middleware/isBasket';
import Main from './modules/main';
import Header from './modules/header';
import Footer from './modules/footer';
import Basket from './modules/basket';
import Init from './modules/init';

export const strict = true;

export const modules = {
    Main,
    Header,
    Footer,
    Basket,
    Init
};

export const actions = {
    async nuxtServerInit ({ state, dispatch, commit, params }, { req, app, store }) {
        await isBasket({ app, store });

        await store.dispatch('Header/getData', { url: `${config.env.CLIENT_URL}/data/header.json` }).then((data) => {
            store.commit('Header/setData', { label: 'menu', data: data.menu });
        });

        await store.dispatch('Footer/getData', { url: `${config.env.CLIENT_URL}/data/footer.json` }).then((data) => {
            store.commit('Footer/setData', { label: 'menu1', data: data.menu1 });
            store.commit('Footer/setData', { label: 'menu2', data: data.menu2 });
            store.commit('Footer/setData', { label: 'menu3', data: data.menu3 });
            store.commit('Footer/setData', { label: 'socialsList', data: data.socialsList });
        });

        await store.dispatch('Main/getData', { url: `${config.env.CLIENT_URL}/data/card.json` }).then((data) => {
            store.commit('Main/setData', { label: 'name', data: data.name });
            store.commit('Main/setData', { label: 'isEmpty', data: data.isEmpty });
            store.commit('Main/setData', { label: 'gallery', data: data.gallery });
            store.commit('Main/setData', { label: 'panel', data: data.panel });
            store.commit('Main/setData', { label: 'price', data: data.price });
            store.commit('Main/setData', { label: 'sizes', data: data.sizes });
            store.commit('Main/setData', { label: 'colors', data: data.colors });
            store.commit('Main/setData', { label: 'content', data: data.content });
            store.commit('Main/setData', { label: 'quantity', data: data.quantity });
        });
    }
};
