
import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsVue from '@/views/Products.vue'
import LoginVue from '@/views/Login.vue'
import { addWorkout, useSession } from '@/model/session'
import excerciseAdd from '@/views/excerciseAdd.vue'
import register from '@/views/register.vue'
import addWorkoutpage from '@/views/addWorkoutpage.vue'
import socialView from '@/views/socialView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/addWorkout', name: 'addWorkout', component: addWorkoutpage },
    { path: '/register', name: 'register', component: register },
    { path: '/socialView', name: 'socialView', component: socialView },
    { path: '/login', name: 'login', component: LoginVue },
    { path: '/excerciseAdd', name: 'excerciseAdd', component: excerciseAdd },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/admin/products', name: 'admin-products', component: () => import('../views/admin/ProductsList.vue'), beforeEnter: secureRoute },
    { path: '/admin/usersView', name: 'admin-userView', component: () => import('../views/admin/usersView.vue'), beforeEnter: secureRoute },
  ]
})

export default router

function secureRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext ) {
    const session = useSession();
    if (session.user) {
        next()
    } else { 
        if(!session.redirectUrl && to.path != '/login') {
            session.redirectUrl = to.fullPath;
        }
        next('/login')
    }
}