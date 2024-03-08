import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './modules/routes'

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router

