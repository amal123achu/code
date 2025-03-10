import { createRouter, createWebHistory } from 'vue-router'
import { session } from './data/session'
import { userResource } from '@/data/user'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    name: 'Login',
    path: '/account/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/pages/register.vue'),
  },
  {
    name: 'signin',
    path: '/signin',
    component: () => import('@/pages/signin.vue'),
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/pages/main.vue'),
  },
  {
    name: 'filecode',
    path: '/filecode/:uuid',  // Added UUID parameter
    component: () => import('@/pages/filecode.vue'),
    props: true  // Enable props for route params
  },
  {
    name: 'files',
    path: '/files',
    component: () => import('@/pages/files.vue'),
  },
  {
    name: 'owner',
    path: '/owner',
    props: (route) => ({
      courseName: route.query.courseName,
      courseDescription: route.query.courseDescription,
    }),
    component: () => import('@/pages/owner.vue'),
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('@/pages/profile.vue'),
  },
]

let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

router.beforeEach(async (to, from, next) => {
  let isLoggedIn = session.isLoggedIn
  try {
    await userResource.promise
  } catch (error) {
    isLoggedIn = false
  }
  
  if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Home' })
  } else if (to.name !== 'Login' && !isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router