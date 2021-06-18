import store from "../store/index";
import * as Storage from "../pages/auth/storage/storage";
import { routes as auth } from "../pages/auth/index";
import { routes as pages } from "../pages/index";
import { routes as auxiliares } from "../pages/index2";


const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      ...pages
    ],
    beforeEnter: async (to, from, next) => {
      if (Storage.getLocalToken()) {
        await store.dispatch("auth/ActionVerifyToken", next);
      }else{
        next({name: "login"})
      }
    }
  },
  ...auth,
  {
    path: "*",
    component: () => import("../pages/Error404.vue")
  },
  {
    path: "/",
    component: () => import("layouts/SecondLayout.vue"),
    children: [
      ...auxiliares
    ],
  }
];

export default routes;
