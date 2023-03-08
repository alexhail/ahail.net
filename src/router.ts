import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
import DiscographyView from './views/DiscographyView.vue'
import HomeView from './views/HomeView.vue'
import PortfolioView from './views/PortfolioView.vue'
import ProgrammingView from './views/ProgrammingView.vue'
import MusicView from './views/MusicView.vue'
import ResumeView from './views/ResumeView.vue'

const title_prefix = "Ahail Music";

const routes = [
  {
    path: '/', name: 'home', component: HomeView,
    meta: {
      title: `${title_prefix} | Official Website`
    }
  },
  {
    path: '/code', name: 'code', component: ProgrammingView,
    meta: {
      title: `${title_prefix} | Code`
    }
  },
  {
    path: '/code/portfolio', name: 'portfolio', component: PortfolioView,
    meta: {
      title: `${title_prefix} | Code | Portfolio`
    }
  },
  {
    path: '/code/resume', name: 'resume', component: ResumeView,
    meta: {
      title: `${title_prefix} | Code | Resume`
    }
  },
  {
    path: '/music', name: 'music', component: MusicView,
    meta: {
      title: `${title_prefix} | Music`
    }
  },
  {
    path: '/music/discography', name: 'discography', component: DiscographyView,
    meta: {
      title: `${title_prefix} | Music | Discography`
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to: any, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if(to.matched.length){
    document.title = to.meta.title;
    return next()
  }

  return next({ name: 'home' })
})

export default router
