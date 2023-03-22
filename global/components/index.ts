import { App } from 'vue';
import CrushDrawer from './crush-drawer.vue';
import CrushPopup from './crush-popup.vue';
import CrushPicker from './crush-picker.vue';

export default function(app: App) {
	app.component('CrushDrawer', CrushDrawer);
	app.component('CrushPopup', CrushPopup);
	app.component('CrushPicker', CrushPicker);
}
