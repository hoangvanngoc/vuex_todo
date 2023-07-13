import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import ListTasks from "../views/ListTasks.vue"
import DetailTask from "../views/DetailTask.vue"

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "lists",
        component: ListTasks,
      },
      {
        path: "/lists/detail",
        name: "list-detail",
        component: DetailTask,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router