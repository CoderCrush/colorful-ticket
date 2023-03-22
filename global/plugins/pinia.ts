import * as Pinia from 'pinia';
import { createUnistorage } from '@/uni_modules/pinia-plugin-unistorage'
import { App } from "vue"

export default function(app: App) {
	const store = Pinia.createPinia()
	store.use(createUnistorage())
	app.use(store)
}