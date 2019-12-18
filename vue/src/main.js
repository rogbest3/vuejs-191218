import Vue from 'vue'
import App from './App.vue' // 실제 파일 
import router from './router' // 인스턴스 이름 -> yarn add vue-router

Vue.config.productionTip = false

new Vue({ // router를 new Vue해서 Vue에 주입
  render: h => h(App),
  router        //  전역
}).$mount('#app')

// cart = new Vue(){} - cart = 생략