import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/test',
        name: 'test',
        component: () => import('@/pages/Test.vue')
    },
    {
        path: '/report',
        name: 'report',
        component: () => import('@/pages/Report.vue')
        
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
