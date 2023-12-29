import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import { route, } from 'quasar/wrappers'

import { onAuthStateChanged, } from 'firebase/auth'
import { auth, } from 'src/boot/firebase'

import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route((/* { store, ssrContext } */) => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : import.meta.env.VITE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0, }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(import.meta.env.VITE_ROUTER_BASE),
  })

  const getCurrentUser = async () =>
    await new Promise((resolve, reject) => {
      const removelistener = onAuthStateChanged(
        auth,
        (currentUser) => {
          removelistener()
          resolve(currentUser)
        },
        reject
      )
    })

  Router.beforeEach(async (to, from, next) => {
    to.matched.some(({ meta, }) => meta.requiredAuth)
      ? (await getCurrentUser())
          ? next()
          : next('/login')
      : next()
  })

  return Router
})
