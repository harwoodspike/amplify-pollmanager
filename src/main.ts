import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AmplifyVue from '@aws-amplify/ui-vue'

createApp(App)
    .use(AmplifyVue)
    .mount('#app')
