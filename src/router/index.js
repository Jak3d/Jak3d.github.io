import {createRouter, createWebHistory} from 'vue-router'
import CV from '../views/CV'
import ProjectPage from '../views/Projects'

import AppuntiPage from '../views/AppuntiPagina'

const routes = [
    {path:'/CV',
    name:'CV',
    component:CV,
    },
    {
        path:'/Projects',
        name:'Projects',
        component: ProjectPage,
    },
    {
        path:'/Appunti',
        name:'AppuntiPagina',
        component: AppuntiPage,
        meta: { transition: 'slide-left' },
    }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
}
)
export default router