import {createRouter, createWebHistory} from 'vue-router'
import CV from '../views/CV'
import ProjectPage from '../views/Projects'


const routes = [
    {path:'/CV',
    name:'CV',
    component:CV,
    },
    {
        path:'/Projects',
        name:'Projects',
        component: ProjectPage,
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