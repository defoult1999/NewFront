import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/applications',
    name: 'Applications',
    meta: {layout: 'main'},
    component: HomeView
  },
  {
    path: '/application/:id',
    name: 'Application',
    meta: {layout: 'main'},
    component: () => import('../views/ApplicationView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'auth'},
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout: 'auth'},
    component: () => import('../views/RegistrationView.vue'),
    children: [
      {
        path: 'reguser',
        name: 'RegUser',
        component: () => import('../components/RegistrationComponent.vue'),
      },
      {
        path: 'regcompany',
        name: 'RegCompany',
        component: () => import('../components/RegCompany.vue'),
      },
      {
        path: 'regphone',
        name: 'RegPhone',
        component: () => import('../components/RegPhone.vue'),
      },
      {
        path: 'checkphone',
        name: 'CheckPhone',
        component: () => import('../components/CheckPhone.vue'),
      }
    ]
  },
  {
    path: '/company',
    name: 'Company',
    meta: {layout: 'main'},
    component: () => import('../views/CompanyView.vue')
  },
  {
    path: '/chats',
    name: 'Chats',
    meta: {layout: 'main'},
    component: () => import('../views/ChatsView.vue')
  },
  {
    path: '/designer',
    name: 'Designer',
    meta: {layout: 'main'},
    component: () => import('../views/DesignerView.vue')
  },
  // {
  //   path: '*',
  //   name: 'Error',
  //   meta: {layout: 'auth'},
  //   component: () => import('../views/ErrorView.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
