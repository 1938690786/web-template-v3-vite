import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// import "~/styles/element/index.scss";
import "~/styles/index.scss";
import "uno.css";

import ElementPlus from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

// 注册ElementPlusIconsVue
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use<any>(ElementPlus);
app.use(createPinia());
app.mount("#app");
