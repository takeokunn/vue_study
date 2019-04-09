import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Form from './components/Form.vue'
import AgGrid from './components/AgGrid.vue'

import store from './store';

Vue.use(Router)
Vue.config.productionTip = false

const routes = [
    { path: '/', component: Home },
    { path: '/form', component: Form },
    { path: '/ag-grid', component: AgGrid }
]

const router = new Router({ routes })
new Vue({ render: h => h(App), router, store }).$mount('#app')
