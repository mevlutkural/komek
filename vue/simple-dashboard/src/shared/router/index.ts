import { createRouter, createWebHashHistory } from "vue-router";
import { ROUTES } from "./routes";

const router = createRouter({
  history: createWebHashHistory("#"),
  routes: Object.values(ROUTES),
});

export default router;
