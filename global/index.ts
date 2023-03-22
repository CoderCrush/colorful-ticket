import { App } from 'vue';
import registerComponents from './components';
import registerPlugins from './plugins';

export default function(app: App) {
	registerComponents(app);
	registerPlugins(app);
}
