import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})



const EXPIRESTIME = 3600000

router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
    let item = localStorage.getItem("token");
		let time = localStorage.getItem("startTime")
    if (item) {
      let date = new Date().getTime();
      if (date - time > EXPIRESTIME) {
          localStorage.removeItem('token');
					localStorage.removeItem('startTime');
					window.location.href = `/login/`
      } else {
        next();
      }
    } else {
      window.location.href = `/login/`
    }
  } else {
    next();
  }
});

createApp(App).use(vuetify).use(router).mount('#app')