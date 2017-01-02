// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueNVD3 from '../dist/vue-nvd3.common'
// import '../dist/vue-nvd3.css'
import VueNVD3 from 'components'
import VueRouter from 'vue-router'
import UkAccordionDoc from './docs/UkAccordion.doc.vue'
import UkPanelDoc from './docs/UkPanel.doc.vue'
import UkHtmlEditorDoc from './docs/UkHtmlEditor.doc.vue'
import UkOffcanvasDoc from './docs/UkOffcanvas.doc.vue'
import UkModalDoc from './docs/UkModal.doc.vue'
import UkTabsDoc from './docs/UkTabs.doc.vue'
import UkUploaderDoc from './docs/UkUploader.doc.vue'
import PickersDoc from './docs/Pickers.vue'


Vue.use(VueNVD3)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {name: 'Pickers', path: '/examples/pickers', component: PickersDoc},
    {name: 'Accordions', path: '/examples/accordions', component: UkAccordionDoc},
    {name: 'Panels', path: '/examples/panels', component: UkPanelDoc},
    {name: 'Modals', path: '/examples/modals', component: UkModalDoc},
    {name: 'Uploaders', path: '/examples/uploaders', component: UkUploaderDoc},
    {name: 'Tabs', path: '/examples/tabs', component: UkTabsDoc},
    {name: 'HtmlEditors', path: '/examples/html-editors', component: UkHtmlEditorDoc},
    {name: 'Offcanvas', path: '/examples/offcanvas', component: UkOffcanvasDoc}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})