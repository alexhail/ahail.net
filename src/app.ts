import { createApp } from 'vue'
import App from './App.vue'
import Background from './components/Background.vue'
import Navigation from './components/Navigation.vue'
import Button from './components/Button.vue'
import Title from './components/Title.vue'
import router from './router'

import './assets/fonts/audiowide/audiowide.css'
import './assets/fonts/roboto/roboto.css'
import './assets/sass/app.scss'

const app = createApp(App)

app.use(router)
app.component("Navigation", Navigation)
app.component("Background", Background)
app.component("Button", Button)
app.component("Title", Title)
app.mount('main#content')
