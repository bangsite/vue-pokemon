import type {App} from "vue";
import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";

import {constantRouterMap} from "./routes";
import {useLoadingStore} from '@/stores/loading.store';
import {storeToRefs} from "pinia";


const router = createRouter({
    strict: true,
    history: createWebHistory(),
    linkActiveClass: "active",
    routes: constantRouterMap as RouteRecordRaw[],
    scrollBehavior: () => ({top: 0, behavior: "smooth"}),
});

router.beforeEach((to, from, next) => {
    const {startLoading} = useLoadingStore();
    startLoading();
    next();
});

router.afterEach(() => {
    const {cancelLoading} = useLoadingStore();
    cancelLoading();
});

// export const resetRouter = (): void => {
//     const resetWhiteNameList = ["Redirect", "Login", "NotFound", "Root"];
//
//     router.getRoutes().forEach((route) => {
//         const {name} = route;
//         if (name && !resetWhiteNameList.includes(name as string)) {
//             router.hasRoute(name) && router.removeRoute(name);
//         }
//     });
// };

export const setupRouter = async (app: App<Element>) => {
    app.use(router);
    // await router.isReady();
};

export default router;

