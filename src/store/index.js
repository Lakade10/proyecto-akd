import { createStore } from 'vuex'
import web from './web'

const store = createStore({
  modules: {
    web
  }
})

export default store