import Vue from 'vue'
import App from './App.vue'
import * as ElementUI from 'element-ui'
import router from './router'
import store from './store'
import './permission'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/index.js'
import '@/assets/css/index.css'

//自动全局注册components下的组件
const requireComponents = require.context(
//    组件目录的相对路径
    './components',
    //是否查询子目录
    false,
    //匹配子组件文件名的的正则
    /base\w+\.(vue|js)$/
)
// console.log(requireComponents.keys())
requireComponents.keys().forEach((fileName?:string) => {
  // 获取组件配置
  if(!fileName || fileName.indexOf('tinymce') != -1)return;
  const componentConfig = requireComponents(fileName)

  // 获取组件的 PascalCase 命名
  // const componentName = upperFirst(
  //     camelCase(
  //         // 获取和目录深度无关的文件名
  //         fileName
  //             .split('/')
  //             .pop()
  //             .replace(/\.\w+$/, '')
  //     )
  // )
  let arrName: Array<any> = fileName.split('/')
  let componentName: string = arrName.pop().replace(/\.\w+$/, '')

  componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1)
  // 全局注册组件
  Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
  )
})
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
