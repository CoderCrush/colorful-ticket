import { App } from "vue"
import pinia from "./pinia"

export default function(app: App) {
	app.use(pinia)
}