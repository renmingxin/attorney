import Vue from 'vue'
// import VueQuillEditor from 'vue-quill-editor'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/common/styles/index.scss';
import '@/assets/main.scss';

import fontawesome from '@fortawesome/fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import '@fortawesome/fontawesome/styles.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import VueQuillEditor from 'vue-quill-editor'
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// import '@/assets/reset.css';
import '@/assets/iconfont/iconfont.css';
//vue富文本
// const { VueQuillEditor } = require('vue-quill-editor');
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import iView from 'iview';


Vue.config.productionTip = false

Vue.use(Element)
// Vue.use(VueQuillEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
