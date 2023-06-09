import { createRouter,createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/previewPDF1'
  },
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    children: [
      {
        name: 'previewPDF1',
        path: '/previewPDF1',
        component: () => import('@/components/previewPDF.vue')
      },
      {
        name: 'previewPDF2',
        path: '/previewPDF2',
        component: () => import('@/components/HelloWorld.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
