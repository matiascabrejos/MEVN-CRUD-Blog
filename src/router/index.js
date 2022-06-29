import { createRouter, createWebHashHistory } from "vue-router";
import CreateBlog from "../components/CreateBlog.vue";
import ListBlog from "../components/ListBlog.vue";
import EditBlog from "../components/EditBlog.vue";

const routes = [
  {
    path: "/create-blog",
    name: "Create Blog",
    component: CreateBlog,
  },
  {
    path: "/",
    name: "Home",
    component: ListBlog,
  },
  {
    path: "/edit-blog/:id",
    name: "Edit",
    component: EditBlog,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
