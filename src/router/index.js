import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/love',
        name: 'Love',
        component: () => import('../views/Love.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router