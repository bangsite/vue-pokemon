export const constantRouterMap: AppRouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("@/views/HomeView.vue"),
        name: "Root",
    },
    {
        path: "/403",
        name: "403",
        component: () => import("@/views/exception/Error403.vue"),
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/exception/Error404.vue"),

    },
    {
        path: "/500",
        name: "500",
        component: () => import("@/views/exception/Error500.vue"),
    },
];
