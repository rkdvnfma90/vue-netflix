import { createApp } from 'vue';
import App from '@/App';
import Modal from '@/components/Modal';
import LoadingSpinner from '@/components/LoadingSpinner';
import Toast from '@/components/Toast';
import store from '@/store';
import router from '@/routes';

const app = createApp(App);

app.component('Modal', Modal);
app.component('LoadingSpinner', LoadingSpinner);
app.component('Toast', Toast);
app.use(store);
app.use(router);
app.mount('#app');
