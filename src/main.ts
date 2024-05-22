import { createApp } from 'vue'
import { setupPinia } from "@/plugins/pinia";
import { setupRouter } from "./router";

import App from './App.vue'

import "@/assets/scss/main.scss";

const app = createApp(App)

async function setupAppAll() {

    // Setup Store
    setupPinia(app);

    // Setup Router
    await setupRouter(app);

    app.mount("#app");
}

setupAppAll().catch((error) => {
    console.error("Error setting up the app:", error);
});
