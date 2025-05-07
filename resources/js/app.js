require('./bootstrap');
window.Vue = require('vue').default;;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('flastcard-detail', require('./components/flashcardDetail.vue').default);

const app = new Vue({
    el: '#app'
});