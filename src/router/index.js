import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/panel'
    },
    {
      path: '/campaigns',
      name: 'campaigns',
      component: () => import('../views/CampaignsView.vue')
    },
    {
      path: '/leads',
      name: 'leads',
      component: () => import('../views/LeadsView.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/NotificationsView.vue')
    },
    {
      path: '/panel',
      name: 'about',
      component: () => import('../views/PanelView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    }
  ]
})

export default router
