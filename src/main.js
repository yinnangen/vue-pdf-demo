import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PdfViewer from "./components/previewPDF.vue"

const app = createApp(App).use(router).mount('#app')

app.component('PdfViewer', PdfViewer)
