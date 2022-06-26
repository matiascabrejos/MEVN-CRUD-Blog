import { createRouter, createWebHashHistory } from "vue-router";
import CreateBlog from "../components/CreateBlog.vue";
import ListBlog from "../components/ListBlog.vue";
import EditBlog from "../components/EditBlog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CreateBlog,
  },
  {
    path: "/view",
    name: "View",
    component: ListBlog,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: EditBlog,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
