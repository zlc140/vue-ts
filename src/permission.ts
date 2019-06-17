import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})
