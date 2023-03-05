import { createApp } from 'vue'
import App from './App.vue'
import Background from './components/Background.vue'
import Navigation from './components/Navigation.vue'
import router from './router'

import './assets/sass/app.scss'

const app = createApp(App)

app.use(router)
app.component("Navigation", Navigation)
app.component("Background", Background)
app.mount('main#content')
