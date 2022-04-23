import Vue from 'vue';
import VueRouter from 'VueRouter';
import routes from './routes/index.js';

Vue.use(VueRouter);

/**
 * 路由入口
 *
 */
export default new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/micro-frontend/vjsf-demo-editor/' : '/',
    mode: 'history',
    routes: [...routes],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
});
