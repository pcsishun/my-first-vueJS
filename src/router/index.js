import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Models from '@/components/Models';
import Shop from '@/components/Shop';
import ImagesPage from '@/components/ImagesPage';

Vue.use(Router)


export default new Router({
    routes: [
    {
        path: '/image',
        name: 'ImagesPage',
        component: ImagesPage
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },  
    {
        path: '/models',
        name: 'Models',
        component: Models
    },  
    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    } 
]
})