import { createRouter, createWebHistory } from "vue-router";
import Homecursos from "../components/DemoHomeCusos.vue"; // Verifique o caminho e a escrita

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homecursos, // Aqui deve estar o nome do componente importado
  },
  // ... outras rotas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
