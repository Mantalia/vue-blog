import Vue from 'vue'
import VueI18n from 'vue-i18n'

import cn from './locale-cn'
import en from './locale-en'

const messages = { cn, en }
Vue.use(VueI18n)

export default new VueI18n({
	locale: 'cn',
	messages
})
