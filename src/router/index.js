import { createRouter, createWebHistory } from 'vue-router'
import CV from '../views/CV'
import ProjectPage from '../views/Projects'
import ProfilePage from '../views/Profile.vue'
import ProfilePageCV from '../views/ProfileCopy.vue'
import ProfilePageProjects from '../views/ProfileProjects.vue'


const routes = [
  {
    path: '/',
    redirect: '/Profile'
  },
  {
    path: '/CV',
    name: 'CV',
    component: CV,
    props: true,
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: ProjectPage,
    props: true,
  },
  {
    path: '/Profile/',
    name: 'Profile',
    component: ProfilePage,
    props: true,
  },
  {
    path: '/Profile/CV',
    name: 'ProfileCV',
    component: ProfilePageCV,
    props: true,
  },
  {
    path: '/Profile/Projects',
    name: 'ProfileProjects',
    component: ProfilePageProjects,
    props: true,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
}
)
export default router
