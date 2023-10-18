import { type RouteRecordRaw, } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('src/layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('src/pages/IndexPage.vue'), }, ],
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: '/register',
    component: async () => await import('src/layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('src/pages/RegisterPage.vue'), }, ],
  },
  {
    path: '/login',
    component: async () => await import('src/layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('src/pages/LoginPage.vue'), }, ],
  },
  {
    path: '/forgot',
    component: async () => await import('src/layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('src/pages/ForgotPage.vue'), }, ],
  },
  {
    path: '/account',
    component: async () => await import('src/layouts/MainLayout.vue'),
    children: [ { path: '', component: async () => await import('src/pages/AccountPage.vue'), }, ],
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: '/new',
    component: async () => await import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: async () => await import('src/pages/NewEmployeePage.vue'), },
    ],
    meta: {
      requiredAuth: true,
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/access-deny',
    component: async () => await import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: async () => await import('src/pages/ErrorAccessDeny.vue'), },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: async () => await import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: async () => await import('src/pages/ErrorNotFound.vue'), },
    ],
  },
]

export default routes
