import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import app from './modules/app'
import login from './modules/login'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		app,
		home,
		login
	},
	trict: debug
})
