import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './ruter'
export function createApp(){
	const router = createRouter()
	const app = new Vue({
		router,
		render:h => h(App)
	})
	return { app , router }
}

